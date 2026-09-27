/* Training Connect Global — shared front-end behaviour
   Vanilla JS only. Each page calls the init functions it needs. */

/* Enquiry emails are sent via Web3Forms (https://web3forms.com) — a free
   form-to-email API that needs no backend server, which suits a static
   HTML/CSS/JS site like this one.
   TO GO LIVE: visit https://web3forms.com, enter the inbox that should
   receive enquiries (e.g. training@trainingconnectglobal.com), and it
   emails you a free Access Key — no account/signup needed. Paste that
   key in place of "YOUR_ACCESS_KEY_HERE" below. Web3Forms' own docs note
   this key is safe to keep in public front-end code, the same way a
   Firebase key is. */
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

/* localStorage key every submitted enquiry is written to. Both dashboards
   read from this same key, so "real-time tracked data" here means: real
   submissions made on this browser/device. Without a server database,
   that's the only enquiry activity a static site can see — see the note
   above tcgInitAdminDashboard() for what this does and doesn't cover. */
const TCG_STORAGE_KEY = "tcg_enquiries";

/* ---------- Nav ---------- */
function tcgInitNav(){
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && header){
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".main-nav a").forEach(a => {
      a.addEventListener("click", () => header.classList.remove("nav-open"));
    });
  }
  const page = document.body.dataset.page;
  if (page){
    document.querySelectorAll(".main-nav a[data-nav]").forEach(a => {
      if (a.dataset.nav === page) a.classList.add("is-active");
    });
  }
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* ---------- Course card rendering ---------- */
function tcgCategoryMeta(key){
  return TCG_CATEGORIES[key] || { label: key, color: "#0B3C97" };
}

function tcgCourseCardHTML(course){
  const cat = tcgCategoryMeta(course.category);
  return `
    <article class="course-card" style="--accent:${cat.color}" data-category="${course.category}" data-title="${course.title.toLowerCase()}">
      <div class="bar"></div>
      <div class="body">
        <span class="cat-label">${cat.label}</span>
        <h3>${course.title}</h3>
        <p>${course.summary}</p>
        <div class="course-meta">
          <span>${course.duration}</span>
          <span>${course.mode}</span>
          ${course.level && course.level !== "Custom" ? `<span>${course.level}</span>` : ""}
        </div>
        <div class="row">
          <a class="btn btn-line btn-sm" href="course-detail.html?c=${course.slug}">View details</a>
          <a class="btn btn-primary btn-sm" href="enquire.html?course=${course.slug}">Enquire</a>
        </div>
      </div>
    </article>`;
}

function tcgRenderGrid(containerId, list){
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!list.length){
    el.innerHTML = `<div class="empty-state"><h3>No courses match that filter</h3><p>Try a different category or level, or clear your search.</p></div>`;
    el.classList.remove("course-grid");
    return;
  }
  el.classList.add("course-grid");
  el.innerHTML = list.map(tcgCourseCardHTML).join("");
}

/* ---------- Courses listing page ---------- */
function tcgInitCoursesPage(){
  const grid = document.getElementById("courseGrid");
  const catSelect = document.getElementById("categorySelect");
  const levelChipsEl = document.getElementById("levelChips");
  const search = document.getElementById("courseSearch");
  const countEl = document.getElementById("resultsCount");
  if (!grid) return;

  const params = new URLSearchParams(location.search);
  let activeCat = params.get("cat") || "all";
  let activeLevel = "all";

  if (catSelect){
    const catCounts = {};
    TCG_COURSES.forEach(c => { catCounts[c.category] = (catCounts[c.category] || 0) + 1; });
    const cats = Object.keys(TCG_CATEGORIES).filter(k => catCounts[k]);
    catSelect.innerHTML = `<option value="all">All categories (${TCG_COURSES.length})</option>` +
      cats.map(k => `<option value="${k}">${TCG_CATEGORIES[k].label} (${catCounts[k]})</option>`).join("");
    catSelect.value = cats.includes(activeCat) ? activeCat : "all";
    activeCat = catSelect.value;
  }

  const levels = ["all", "Foundation", "Intermediate", "Advanced"];
  if (levelChipsEl){
    levelChipsEl.innerHTML = levels.map(l =>
      `<button type="button" class="chip${l === "all" ? " is-active" : ""}" data-level="${l}">${l === "all" ? "Any level" : l}</button>`
    ).join("");
  }

  function applyFilters(){
    const q = (search && search.value.trim().toLowerCase()) || "";
    const list = TCG_COURSES.filter(c => {
      const matchCat = activeCat === "all" || c.category === activeCat;
      const matchLevel = activeLevel === "all" || c.level === activeLevel;
      const matchQ = !q || c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q);
      return matchCat && matchLevel && matchQ;
    });
    tcgRenderGrid("courseGrid", list);
    if (countEl) countEl.textContent = `${list.length} course${list.length === 1 ? "" : "s"}`;
  }

  if (catSelect) catSelect.addEventListener("change", () => { activeCat = catSelect.value; applyFilters(); });
  if (levelChipsEl){
    levelChipsEl.addEventListener("click", e => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      activeLevel = btn.dataset.level;
      levelChipsEl.querySelectorAll(".chip").forEach(c => c.classList.toggle("is-active", c === btn));
      applyFilters();
    });
  }
  if (search) search.addEventListener("input", applyFilters);

  applyFilters();
}

/* ---------- Course detail page ---------- */
function tcgInitCourseDetail(){
  const root = document.getElementById("courseDetail");
  if (!root) return;
  const slug = new URLSearchParams(location.search).get("c");
  const course = slug && tcgFindCourse(slug);

  if (!course){
    root.innerHTML = `
      <div class="empty-state">
        <h3>We couldn't find that course</h3>
        <p>It may have been renamed or the link is out of date.</p>
        <a class="btn btn-primary" href="courses.html">Browse all courses</a>
      </div>`;
    return;
  }

  document.title = course.title + " — Training Connect Global";
  const cat = tcgCategoryMeta(course.category);
  const curriculum = course.curriculum.map(i => `<li>${i}</li>`).join("");

  root.innerHTML = `
    <p class="breadcrumb"><a href="courses.html">Courses</a> &nbsp;/&nbsp; <a href="courses.html?cat=${course.category}">${cat.label}</a> &nbsp;/&nbsp; ${course.title}</p>
    <div class="detail-head">
      <div>
        <span class="pill" style="background:${cat.color}1a;color:${cat.color}">${cat.label}</span>
        <h1>${course.title}</h1>
        <p class="lede">${course.summary}</p>
        <h3>About this course</h3>
        <p>${course.description}</p>
        <h3>What the course covers</h3>
        <ul class="curriculum">${curriculum}</ul>
      </div>
      <aside class="detail-side">
        <div class="panel">
          <ul class="meta-list">
            <li><span>Duration</span><b>${course.duration}</b></li>
            <li><span>Delivery mode</span><b>${course.mode}</b></li>
            <li><span>Category</span><b>${cat.label}</b></li>
            ${course.level && course.level !== "Custom" ? `<li><span>Level</span><b>${course.level}</b></li>` : ""}
          </ul>
          <a class="btn btn-primary btn-block" href="enquire.html?course=${course.slug}">Enquire about this course</a>
          <p class="small-note" style="margin-top:14px">Enquiries are reviewed by the Training Connect Global team and matched to the right training provider and schedule.</p>
        </div>
      </aside>
    </div>`;
}

/* ---------- Enquiry form ---------- */
function tcgInitEnquireForm(){
  const form = document.getElementById("enquireForm");
  if (!form) return;
  const courseSelect = document.getElementById("f-course");
  const success = document.getElementById("enquireSuccess");
  const successCourse = document.getElementById("successCourse");

  if (courseSelect){
    const groups = {};
    TCG_COURSES.forEach(c => {
      const label = tcgCategoryMeta(c.category).label;
      groups[label] = groups[label] || [];
      groups[label].push(c);
    });
    courseSelect.innerHTML = `<option value="">Select a course</option>` +
      Object.keys(groups).map(label =>
        `<optgroup label="${label}">${groups[label].map(c =>
          `<option value="${c.slug}">${c.title}</option>`).join("")}</optgroup>`
      ).join("");

    const pre = new URLSearchParams(location.search).get("course");
    if (pre && tcgFindCourse(pre)) courseSelect.value = pre;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  const formError = document.getElementById("enquireError");

  form.addEventListener("submit", async e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach(field => {
      const wrap = field.closest(".field");
      const ok = field.value.trim() !== "";
      if (wrap) wrap.classList.toggle("has-error", !ok);
      if (!ok) valid = false;
    });
    if (!valid) return;

    const data = {
      name: document.getElementById("f-name").value.trim(),
      email: document.getElementById("f-email").value.trim(),
      phone: document.getElementById("f-phone").value.trim(),
      course: courseSelect ? courseSelect.value : "",
      mode: (form.querySelector('input[name="mode"]:checked') || {}).value || "No preference",
      message: document.getElementById("f-message").value.trim(),
      submittedAt: new Date().toISOString(),
      status: "Pending"
    };
    const course = tcgFindCourse(data.course);

    if (formError) formError.hidden = true;
    if (submitBtn){
      submitBtn.disabled = true;
      submitBtn.dataset.originalText = submitBtn.dataset.originalText || submitBtn.textContent;
      submitBtn.textContent = "Sending…";
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New training enquiry — Training Connect Global",
          name: data.name,
          email: data.email,
          phone: data.phone,
          course: course ? course.title : "Not specified",
          preferred_mode: data.mode,
          message: data.message || "(no additional message)"
        })
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message || "Submission failed");

      const list = JSON.parse(localStorage.getItem(TCG_STORAGE_KEY) || "[]");
      list.unshift(data);
      localStorage.setItem(TCG_STORAGE_KEY, JSON.stringify(list));

      if (successCourse) successCourse.textContent = course ? course.title : "your selected course";
      form.hidden = true;
      if (success) success.classList.add("is-visible");
      window.scrollTo({ top: form.offsetTop - 120, behavior: "smooth" });
    } catch (err){
      if (formError) formError.hidden = false;
    } finally {
      if (submitBtn){
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.dataset.originalText;
      }
    }
  });
}

/* ---------- Shared helpers for both dashboards ---------- */
function tcgStatusBadge(status){
  const map = { Confirmed: "badge-green", Pending: "badge-amber", "Follow-up": "badge-blue", Completed: "badge-green" };
  return `<span class="badge ${map[status] || "badge-blue"}">${status}</span>`;
}

function tcgFmtDate(iso){
  const d = new Date(iso);
  if (isNaN(d)) return "—";
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function tcgReadEnquiries(){
  return JSON.parse(localStorage.getItem(TCG_STORAGE_KEY) || "[]").map(e => ({
    ...e,
    courseTitle: (tcgFindCourse(e.course) || { title: e.course || "Custom enquiry" }).title
  }));
}

/* ---------- User dashboard ---------- */
function tcgInitDashboard(){
  const body = document.getElementById("dashTableBody");
  const emptyState = document.getElementById("dashEmptyState");
  const tableWrap = document.getElementById("dashTableWrap");
  if (!body) return;

  const all = tcgReadEnquiries();

  if (!all.length){
    if (tableWrap) tableWrap.hidden = true;
    if (emptyState) emptyState.hidden = false;
  } else {
    if (tableWrap) tableWrap.hidden = false;
    if (emptyState) emptyState.hidden = true;
    body.innerHTML = all.slice(0, 10).map(e => `
      <tr>
        <td>${e.courseTitle}</td>
        <td>${tcgFmtDate(e.submittedAt)}</td>
        <td>${tcgStatusBadge(e.status)}</td>
      </tr>`).join("");
  }

  const total = all.length;
  const pending = all.filter(e => e.status === "Pending").length;
  const confirmed = all.filter(e => e.status === "Confirmed").length;
  const completed = all.filter(e => e.status === "Completed").length;
  const set = (id, val) => { const n = document.getElementById(id); if (n) n.textContent = val; };
  set("statTotal", total);
  set("statPending", pending);
  set("statConfirmed", confirmed);
  set("statCompleted", completed);
}

/* ---------- Admin dashboard ----------
   Without a backend database, a static site has no server-side record of
   enquiries submitted on OTHER people's devices — there is nowhere for
   that data to be centrally stored. What this view CAN show, truthfully,
   is every enquiry submitted from this device/browser, tracked live via
   localStorage as it happens. That is real, not sample, data — it is
   just scoped to this device rather than aggregated across all visitors.
   For a true multi-device admin view, the two backend-free options are:
   (1) Web3Forms' own dashboard (enable an account at web3forms.com to see
   every submission in one place), or (2) wiring this admin view up to a
   small database or spreadsheet backend later. */
function tcgInitAdminDashboard(){
  const body = document.getElementById("adminTableBody");
  const emptyState = document.getElementById("adminEmptyState");
  const tableWrap = document.getElementById("adminTableWrap");
  if (!body) return;

  const all = tcgReadEnquiries();

  if (!all.length){
    if (tableWrap) tableWrap.hidden = true;
    if (emptyState) emptyState.hidden = false;
  } else {
    if (tableWrap) tableWrap.hidden = false;
    if (emptyState) emptyState.hidden = true;
    body.innerHTML = all.slice(0, 12).map(e => `
      <tr>
        <td>${e.name || "—"}</td>
        <td>${e.courseTitle}</td>
        <td>${e.email || "—"}</td>
        <td>${tcgStatusBadge(e.status)}</td>
      </tr>`).join("");
  }

  const total = all.length;
  const pending = all.filter(e => e.status === "Pending").length;
  const confirmed = all.filter(e => e.status === "Confirmed").length;
  const uniqueCourses = new Set(all.map(e => e.course)).size;
  const set = (id, val) => { const n = document.getElementById(id); if (n) n.textContent = val; };
  set("statActiveCourses", TCG_COURSES.length);
  set("statNewEnquiries", total);
  set("statPendingFollowups", pending);
  set("statConfirmed", confirmed);
}

document.addEventListener("DOMContentLoaded", () => {
  tcgInitNav();
});
