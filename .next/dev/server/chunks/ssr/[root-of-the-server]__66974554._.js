module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/components/Navbar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
;
function Navbar() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem("ft_theme");
        if (saved) {
            setTheme(saved);
            document.documentElement.classList.toggle("dark", saved === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);
    function toggleTheme() {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("ft_theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: "w-full px-6 py-4 flex items-center justify-between sticky top-0 z-40 backdrop-blur-xl bg-white/40 dark:bg-black/30 border-b border-white/20 dark:border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-xl bg-gradient-to-br from-ft-blue to-ft-teal flex items-center justify-center text-white font-bold shadow-xl",
                        children: "FT"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-xl tracking-wide",
                        children: "FitTrack Pro"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "hidden md:flex items-center gap-6 text-sm font-medium",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard",
                        className: `hover:text-ft-blue transition ${router.pathname === "/dashboard" ? "text-ft-blue" : ""}`,
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/weekly-plan",
                        className: `hover:text-ft-blue transition ${router.pathname === "/weekly-plan" ? "text-ft-blue" : ""}`,
                        children: "Plan"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/onboard/goal",
                        className: "btn-primary",
                        children: "New Plan"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: toggleTheme,
                        className: "small-btn",
                        children: theme === "dark" ? "🌙" : "☀️"
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.js",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/BottomNav.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
;
;
;
function BottomNav() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const navItems = [
        {
            href: "/dashboard",
            label: "Home",
            icon: "🏠"
        },
        {
            href: "/day/1",
            label: "Today",
            icon: "🔥"
        },
        {
            href: "/weekly-plan",
            label: "Plan",
            icon: "📅"
        },
        {
            href: "/feedback-log",
            label: "Logs",
            icon: "📝"
        },
        {
            href: "/profile",
            label: "Profile",
            icon: "👤"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "bottom-nav md:hidden",
        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: item.href,
                className: `flex flex-col items-center text-xs ${router.pathname === item.href ? "text-ft-blue font-semibold" : "text-slate-600 dark:text-slate-300"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-lg",
                        children: item.icon
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNav.js",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNav.js",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, item.href, true, {
                fileName: "[project]/components/BottomNav.js",
                lineNumber: 18,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/BottomNav.js",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Card.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Card({ title, children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: `card ${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold mb-3",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/Card.js",
                lineNumber: 4,
                columnNumber: 17
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/Card.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/feedback.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/feedback.js
// client-safe localStorage helper to save session feedback and summarize it
__turbopack_context__.s([
    "getAllFeedback",
    ()=>getAllFeedback,
    "saveSessionFeedback",
    ()=>saveSessionFeedback,
    "summarizeFeedback",
    ()=>summarizeFeedback
]);
const KEY = 'ft_feedback_v1';
function saveSessionFeedback(feedback) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const raw = undefined;
    const arr = undefined;
}
function getAllFeedback() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
    const raw = undefined;
}
function summarizeFeedback({ lastN = 28 } = {}) {
    const all = getAllFeedback();
    if (!all.length) return null;
    const slice = all.slice(0, lastN);
    const summary = {
        total: slice.length,
        difficulty: {
            Easy: 0,
            Moderate: 0,
            Hard: 0
        },
        soreness: {
            None: 0,
            Mild: 0,
            High: 0
        },
        missedRepsCount: 0,
        recentDates: slice.map((s)=>s.date)
    };
    for (const f of slice){
        if (f.difficulty && summary.difficulty[f.difficulty] !== undefined) summary.difficulty[f.difficulty]++;
        if (f.soreness && summary.soreness[f.soreness] !== undefined) summary.soreness[f.soreness]++;
        if (f.missedReps) summary.missedRepsCount++;
    }
    return summary;
}
}),
"[project]/lib/aiExerciseSelector.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/aiExerciseSelector.js
// Hybrid local "AI" exercise selector + same-session alternatives engine
__turbopack_context__.s([
    "EXERCISES",
    ()=>EXERCISES,
    "createPlan",
    ()=>createPlan,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAlternatives",
    ()=>getAlternatives
]);
function randSeeded(seed) {
    let t = seed >>> 0;
    return function() {
        t += 0x6D2B79F5;
        let r = Math.imul(t ^ t >>> 15, 1 | t);
        r ^= r + Math.imul(r ^ r >>> 7, 61 | r);
        return ((r ^ r >>> 14) >>> 0) / 4294967296;
    };
}
const EXERCISES = [
    // Barbell
    {
        id: 'back_squat',
        name: 'Back Squat',
        primary: 'quads',
        movement: 'squat',
        equipment: [
            'barbell'
        ],
        goals: {
            strength: 0.95,
            hypertrophy: 0.85,
            fat: 0.5,
            endurance: 0.2
        },
        experience: 'intermediate'
    },
    {
        id: 'deadlift',
        name: 'Deadlift',
        primary: 'posterior_chain',
        movement: 'hinge',
        equipment: [
            'barbell'
        ],
        goals: {
            strength: 0.98,
            hypertrophy: 0.8
        },
        experience: 'intermediate'
    },
    {
        id: 'bench_press',
        name: 'Barbell Bench Press',
        primary: 'chest',
        movement: 'press',
        equipment: [
            'barbell'
        ],
        goals: {
            strength: 0.96,
            hypertrophy: 0.9
        },
        experience: 'beginner'
    },
    {
        id: 'barbell_row',
        name: 'Barbell Row',
        primary: 'back',
        movement: 'row',
        equipment: [
            'barbell'
        ],
        goals: {
            strength: 0.9,
            hypertrophy: 0.8
        },
        experience: 'beginner'
    },
    // Dumbbell
    {
        id: 'db_flat_press',
        name: 'Dumbbell Flat Press',
        primary: 'chest',
        movement: 'press',
        equipment: [
            'dumbbell'
        ],
        goals: {
            hypertrophy: 0.95
        },
        experience: 'beginner'
    },
    {
        id: 'db_incline_press',
        name: 'Dumbbell Incline Press',
        primary: 'upper_chest',
        movement: 'press',
        equipment: [
            'dumbbell'
        ],
        goals: {
            hypertrophy: 0.95
        },
        experience: 'beginner'
    },
    {
        id: 'db_row',
        name: 'Dumbbell Row',
        primary: 'back',
        movement: 'row',
        equipment: [
            'dumbbell'
        ],
        goals: {
            hypertrophy: 0.9
        },
        experience: 'beginner'
    },
    {
        id: 'goblet_squat',
        name: 'Goblet Squat',
        primary: 'quads',
        movement: 'squat',
        equipment: [
            'dumbbell'
        ],
        goals: {
            hypertrophy: 0.8,
            fat: 0.6
        },
        experience: 'beginner'
    },
    // Bodyweight
    {
        id: 'pushups',
        name: 'Push-ups',
        primary: 'chest',
        movement: 'press',
        equipment: [
            'bodyweight'
        ],
        goals: {
            endurance: 0.8,
            hypertrophy: 0.6
        },
        experience: 'beginner'
    },
    {
        id: 'inverted_row',
        name: 'Inverted Row',
        primary: 'back',
        movement: 'row',
        equipment: [
            'bodyweight'
        ],
        goals: {
            hypertrophy: 0.7,
            endurance: 0.6
        },
        experience: 'beginner'
    },
    {
        id: 'bw_squat',
        name: 'Bodyweight Squat',
        primary: 'quads',
        movement: 'squat',
        equipment: [
            'bodyweight'
        ],
        goals: {
            endurance: 0.8,
            fat: 0.7
        },
        experience: 'beginner'
    },
    {
        id: 'walking_lunge',
        name: 'Walking Lunge',
        primary: 'glutes',
        movement: 'lunge',
        equipment: [
            'bodyweight'
        ],
        goals: {
            hypertrophy: 0.6
        },
        experience: 'beginner'
    },
    // Accessories
    {
        id: 'lateral_raise',
        name: 'Lateral Raise',
        primary: 'shoulders',
        movement: 'isolation',
        equipment: [
            'dumbbell'
        ],
        goals: {
            hypertrophy: 0.95
        },
        experience: 'beginner'
    },
    {
        id: 'biceps_curl',
        name: 'Dumbbell Curl',
        primary: 'biceps',
        movement: 'isolation',
        equipment: [
            'dumbbell'
        ],
        goals: {
            hypertrophy: 0.9
        },
        experience: 'beginner'
    },
    {
        id: 'triceps_ext',
        name: 'Triceps Extension',
        primary: 'triceps',
        movement: 'isolation',
        equipment: [
            'dumbbell'
        ],
        goals: {
            hypertrophy: 0.9
        },
        experience: 'beginner'
    },
    // Cardio
    {
        id: 'bike_intervals',
        name: 'Bike Intervals',
        primary: 'cardio',
        movement: 'cardio',
        equipment: [
            'bike'
        ],
        goals: {
            endurance: 0.98,
            fat: 0.9
        },
        experience: 'beginner'
    }
];
/* -------------------------------------
   UTILITIES
   ------------------------------------- */ function filterByEquipment(exList, flags) {
    const eqSet = new Set(flags || []);
    return exList.filter((ex)=>ex.equipment.some((e)=>eqSet.has(e)));
}
function pickWeighted(rand, arr, scoreFn, count) {
    const out = [];
    let pool = [
        ...arr
    ];
    while(out.length < count && pool.length){
        const scores = pool.map((x)=>Math.max(0, scoreFn(x)));
        const total = scores.reduce((a, b)=>a + b, 0) || 1;
        const r = rand();
        let idx = 0, acc = 0;
        for(let i = 0; i < scores.length; i++){
            acc += scores[i] / total;
            if (r <= acc) {
                idx = i;
                break;
            }
        }
        out.push(pool[idx]);
        pool.splice(idx, 1);
    }
    return out;
}
/* -------------------------------------
   Session builder
   ------------------------------------- */ function scoreForProfile(ex, profile) {
    const g = (profile.goal || '').toLowerCase();
    if (g.includes('strength')) return ex.goals.strength || 0.3;
    if (g.includes('muscle') || g.includes('hypertrophy')) return ex.goals.hypertrophy || 0.3;
    if (g.includes('fat') || g.includes('loss')) return ex.goals.fat || 0.2;
    if (g.includes('endurance')) return ex.goals.endurance || 0.2;
    return ex.goals.hypertrophy || 0.3;
}
function buildSession(profile, pool, sessionType, time, rand) {
    const targetCount = time < 35 ? 3 : time < 45 ? 4 : 5;
    const typeMap = {
        push: [
            'press',
            'chest',
            'shoulders',
            'triceps'
        ],
        pull: [
            'row',
            'pull',
            'back',
            'biceps'
        ],
        legs: [
            'squat',
            'hinge',
            'lunge',
            'quads',
            'glutes',
            'hamstrings'
        ],
        full: [
            'squat',
            'hinge',
            'press',
            'row',
            'isolation',
            'cardio'
        ]
    };
    const keys = typeMap[sessionType.toLowerCase()] || typeMap.full;
    const candidates = pool.filter((ex)=>keys.some((k)=>ex.movement.includes(k) || ex.primary.includes(k)));
    const picked = pickWeighted(rand, candidates, (ex)=>scoreForProfile(ex, profile) * (0.85 + rand() * 0.3), targetCount);
    return picked.map((ex)=>({
            id: ex.id,
            name: ex.name,
            equipment: ex.equipment,
            primary: ex.primary,
            movement: ex.movement,
            sets: 3,
            reps: 8 + Math.floor(rand() * 4),
            intensity_pct: 65 + Math.floor(rand() * 10),
            rest_sec: 75,
            rir: 1,
            notes: ""
        }));
}
function createPlan(profile = {}, opts = {}) {
    const days = Number(profile.daysPerWeek) || 3;
    const time = Number(profile.timePerSession) || 40;
    const seed = profile.seed || Math.floor(Math.random() * 1e9);
    const rand = randSeeded(seed);
    // equipment normalization
    const eq = new Set(profile.equipment || [
        'bodyweight'
    ]);
    const eqFlags = [];
    if (eq.has('barbell') || eq.has('machine') || eq.has('gym')) eqFlags.push('barbell', 'machine');
    if (eq.has('dumbbell') || eq.has('bands') || eq.has('home')) eqFlags.push('dumbbell');
    if (eq.has('bodyweight')) eqFlags.push('bodyweight');
    const pool = filterByEquipment(EXERCISES, eqFlags);
    const split = profile.experience === 'beginner' ? Array(days).fill("Full") : days === 3 ? [
        "Push",
        "Pull",
        "Legs"
    ] : Array(days).fill("Full");
    const sessions = split.map((type, idx)=>({
            day: `Day ${idx + 1} - ${type}`,
            sessionType: type,
            exercises: buildSession(profile, pool, type, time, rand)
        }));
    return {
        generatedAt: new Date().toISOString(),
        profile: {
            ...profile,
            seed
        },
        sessions,
        meta: {
            seed
        }
    };
}
function getAlternatives(baseExerciseName, pool = "gym", count = 5, profile = {}) {
    if (!baseExerciseName) return [];
    // 1. locate base exercise (case-insensitive)
    let base = EXERCISES.find((ex)=>ex.name.toLowerCase() === baseExerciseName.toLowerCase() || ex.id.toLowerCase() === baseExerciseName.toLowerCase());
    // fallback partial match
    if (!base) {
        const token = baseExerciseName.split(" ")[0].toLowerCase();
        const fallback = EXERCISES.find((ex)=>ex.name.toLowerCase().includes(token));
        if (fallback) base = fallback;
    }
    if (!base) return [];
    // 2. equipment pool → allowed equipment
    const poolMap = {
        gym: [
            'barbell',
            'machine'
        ],
        dumbbell: [
            'dumbbell'
        ],
        body: [
            'bodyweight'
        ]
    };
    const allowed = poolMap[pool] || [
        'barbell',
        'dumbbell',
        'bodyweight'
    ];
    // 3. filter by: same movement OR same primary muscle
    const candidates = EXERCISES.filter((ex)=>{
        if (ex.id === base.id) return false;
        if (!ex.equipment.some((e)=>allowed.includes(e))) return false;
        const sameMove = ex.movement === base.movement;
        const samePrim = ex.primary === base.primary;
        return sameMove || samePrim || ex.movement === 'isolation';
    });
    // 4. scoring for picking
    const rand = randSeeded(profile.seed || Math.floor(Math.random() * 1e9));
    const scoreFn = (ex)=>{
        let s = 0;
        if (ex.movement === base.movement) s += 2.0;
        if (ex.primary === base.primary) s += 1.2;
        s += scoreForProfile(ex, profile);
        return s * (0.85 + rand() * 0.3);
    };
    // pick weighted top-N
    const picked = pickWeighted(rand, candidates, scoreFn, count);
    // 5. return UI-ready objects
    return picked.map((p)=>({
            id: p.id,
            name: p.name,
            equipment: p.equipment,
            primary: p.primary,
            movement: p.movement,
            notes: ""
        }));
}
const __TURBOPACK__default__export__ = {
    createPlan,
    getAlternatives
};
}),
"[project]/lib/planGenerator.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/planGenerator.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateProfessionalPlan",
    ()=>generateProfessionalPlan,
    "getAlternatives",
    ()=>getAlternatives
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aiExerciseSelector$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/aiExerciseSelector.js [ssr] (ecmascript)");
;
function generateProfessionalPlan(profile = {}) {
    const plan = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aiExerciseSelector$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createPlan"](profile);
    plan.profile = plan.profile || profile;
    return plan;
}
function getAlternatives(name, pool = 'gym', count = 5, profile = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aiExerciseSelector$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAlternatives"](name, pool, count, profile);
}
const __TURBOPACK__default__export__ = generateProfessionalPlan;
}),
"[project]/lib/progression.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/progression.js
// Applies weekly progression to sets/reps/intensity based on adaptation style & feedback
/**
 * ex = {
 *   name,
 *   sets,
 *   reps,
 *   intensity_pct,
 *   rest_sec,
 *   rir
 * }
 *
 * Returns modified exercise object
 */ __turbopack_context__.s([
    "applyProgressionToExercises",
    ()=>applyProgressionToExercises
]);
function applyProgressionToExercises(exercises, adaptationStyle, feedbackSummary) {
    if (!Array.isArray(exercises)) return exercises;
    return exercises.map((ex)=>{
        const updated = {
            ...ex
        };
        // Determine adjustment intensity
        let factor = 1.0;
        if (adaptationStyle === 'conservative') factor = 0.5;
        if (adaptationStyle === 'moderate') factor = 1.0;
        if (adaptationStyle === 'aggressive') factor = 1.4;
        // Feedback logic
        let easyBias = 0;
        let hardBias = 0;
        let sorenessBias = 0;
        if (feedbackSummary) {
            const { difficulty, soreness } = feedbackSummary;
            const total = feedbackSummary.total || 1;
            const easyRate = (difficulty.Easy || 0) / total;
            const hardRate = (difficulty.Hard || 0) / total;
            const sorenessRate = (soreness.High || 0) / total;
            easyBias = easyRate * 0.5;
            hardBias = hardRate * -0.7;
            sorenessBias = sorenessRate * -0.5;
        }
        const combinedAdjustment = factor + easyBias + hardBias + sorenessBias;
        // Adjust RIR (lower RIR = harder)
        updated.rir = Math.max(0, Math.round((updated.rir - 0.2 * combinedAdjustment) * 10) / 10);
        // Adjust intensity
        updated.intensity_pct = Math.min(90, Math.round(updated.intensity_pct * (1 + 0.02 * combinedAdjustment)));
        // Adjust sets for compound lifts only
        const isCompound = ex.name.toLowerCase().includes("bench") || ex.name.toLowerCase().includes("squat") || ex.name.toLowerCase().includes("dead") || ex.name.toLowerCase().includes("press") || ex.name.toLowerCase().includes("row");
        if (isCompound) {
            updated.sets = Math.min(6, Math.max(3, Math.round(updated.sets + 0.2 * combinedAdjustment)));
        }
        return updated;
    });
}
}),
"[project]/lib/phaseManager.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/phaseManager.js
// Controls training phases based on time since plan creation
__turbopack_context__.s([
    "getPhaseForWeeks",
    ()=>getPhaseForWeeks,
    "getWeeksSince",
    ()=>getWeeksSince,
    "suggestSplit",
    ()=>suggestSplit
]);
function getWeeksSince(dateString) {
    try {
        const start = new Date(dateString);
        const now = new Date();
        const diff = now - start;
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    } catch  {
        return 0;
    }
}
function getPhaseForWeeks(weeks) {
    if (weeks < 2) return "Foundation Phase";
    if (weeks < 5) return "Volume Phase";
    if (weeks < 8) return "Intensity Phase";
    if (weeks < 10) return "Peak Performance Phase";
    return "Deload / Reset Phase";
}
function suggestSplit(experience, days) {
    if (experience === "beginner") {
        if (days === 3) return "Full Body Split";
        if (days === 4) return "Upper / Lower Split";
        return "Full Body Hybrid";
    }
    if (experience === "intermediate") {
        if (days === 3) return "PPL (3-day version)";
        if (days === 4) return "Upper / Lower Split";
        if (days === 5) return "PPL + Upper/Lower";
        return "PPL (full 6-day)";
    }
    if (experience === "advanced") {
        if (days <= 4) return "Upper / Lower Powerbuilding";
        if (days === 5) return "PPL + Strength Days";
        return "PPL (high volume)";
    }
    return "General Balanced Split";
}
}),
"[project]/lib/trainingEngine.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/trainingEngine.js
__turbopack_context__.s([
    "adaptExistingPlan",
    ()=>adaptExistingPlan,
    "generateAdaptivePlan",
    ()=>generateAdaptivePlan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$planGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/planGenerator.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progression$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/progression.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phaseManager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/phaseManager.js [ssr] (ecmascript)");
;
;
;
function generateAdaptivePlan(profile = {}) {
    const basePlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$planGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["generateProfessionalPlan"])(profile);
    const now = new Date().toISOString();
    basePlan.generatedAt = now;
    basePlan.profile = {
        ...basePlan.profile || {},
        ...profile,
        adaptationStyle: profile.adaptationStyle || 'moderate'
    };
    const initialPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phaseManager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPhaseForWeeks"])(0);
    basePlan.phaseInfo = {
        weeksSinceStart: 0,
        phase: initialPhase,
        split: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phaseManager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["suggestSplit"])(profile.experience || 'beginner', Number(profile.daysPerWeek) || 3)
    };
    // Apply progression even on week 1 (mild)
    basePlan.sessions = basePlan.sessions.map((s)=>({
            ...s,
            exercises: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progression$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["applyProgressionToExercises"])(s.exercises, profile.adaptationStyle, null // no feedback on week 1
            )
        }));
    return basePlan;
}
function adaptExistingPlan(existingPlan, feedbackSummary = null, profile = {}) {
    if (!existingPlan) {
        return generateAdaptivePlan(profile);
    }
    const combinedProfile = {
        ...existingPlan.profile || {},
        ...profile
    };
    const adaptationStyle = combinedProfile.adaptationStyle || 'moderate';
    const weeks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phaseManager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getWeeksSince"])(existingPlan.generatedAt);
    const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phaseManager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPhaseForWeeks"])(weeks);
    existingPlan.phaseInfo = {
        weeksSinceStart: weeks,
        phase,
        split: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$phaseManager$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["suggestSplit"])(combinedProfile.experience || 'beginner', Number(combinedProfile.daysPerWeek) || 3)
    };
    const newSessions = existingPlan.sessions.map((s)=>{
        const progressedExercises = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progression$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["applyProgressionToExercises"])(s.exercises, adaptationStyle, feedbackSummary);
        return {
            ...s,
            exercises: progressedExercises
        };
    });
    const updatedPlan = {
        ...existingPlan,
        sessions: newSessions,
        generatedAt: new Date().toISOString(),
        profile: combinedProfile,
        adaptationSummary: {
            usedStyle: adaptationStyle,
            weeksSinceStart: weeks,
            difficultyIndex: feedbackSummary ? ((feedbackSummary.difficulty.Easy || 0) - (feedbackSummary.difficulty.Hard || 0)) / (feedbackSummary.total || 1) : 0
        }
    };
    return updatedPlan;
}
}),
"[project]/pages/dashboard.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BottomNav$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BottomNav.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$feedback$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/feedback.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trainingEngine$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/trainingEngine.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function Dashboard() {
    const [plan, setPlan] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [feedbackSummary, setFeedbackSummary] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const savedProfile = localStorage.getItem("ft_profile");
        if (savedProfile) setProfile(JSON.parse(savedProfile));
        fetch("/api/plan").then((r)=>r.json()).then((p)=>{
            setPlan(p);
            setLoading(false);
        });
        const fb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$feedback$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["summarizeFeedback"])({
            lastN: 20
        });
        setFeedbackSummary(fb);
    }, []);
    function regeneratePlan() {
        if (!plan || !profile) {
            alert("No plan found.");
            return;
        }
        const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$feedback$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["summarizeFeedback"])({
            lastN: 20
        }) || {};
        const newPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$trainingEngine$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["adaptExistingPlan"])(plan, summary, profile);
        localStorage.setItem("ft_plan", JSON.stringify(newPlan));
        setPlan(newPlan);
        alert("Plan updated with adaptive progression!");
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/pages/dashboard.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                    className: "container p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "Loading your dashboard…"
                    }, void 0, false, {
                        fileName: "[project]/pages/dashboard.js",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/dashboard.js",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    const nextSession = plan?.sessions?.[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/dashboard.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BottomNav$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/dashboard.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "container mt-4 mb-20 grid gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold tracking-tight mb-1",
                                children: "Welcome back 👋"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 dark:text-slate-300",
                                children: "Your personalized training dashboard"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard.js",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    nextSession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-3xl bg-gradient-to-br from-ft-blue to-ft-teal text-white shadow-xl relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold mb-1",
                                children: "Your Next Workout"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard.js",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "opacity-90 mb-4",
                                children: nextSession.day
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard.js",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "text-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "opacity-90",
                                            children: [
                                                nextSession.exercises.length,
                                                " exercises •",
                                                " ",
                                                profile?.timePerSession || 40,
                                                " mins"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/dashboard.js",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/dashboard.js",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/day/1",
                                        className: "bg-white text-ft-blue px-4 py-2 rounded-xl font-semibold shadow-md",
                                        children: "Start →"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/dashboard.js",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/dashboard.js",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "absolute right-4 bottom-4 text-6xl opacity-20",
                                children: "💪"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard.js",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard.js",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "This Week’s Plan",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid gap-3",
                            children: plan.sessions.map((session, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/day/${idx + 1}`,
                                    className: "interactive p-4 rounded-xl border bg-white/50 dark:bg-white/10 hover:shadow-md transition flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold",
                                                    children: session.day
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/dashboard.js",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-600 dark:text-slate-300",
                                                    children: [
                                                        session.exercises.length,
                                                        " exercises •",
                                                        " ",
                                                        profile?.timePerSession || 40,
                                                        " mins"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/dashboard.js",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/dashboard.js",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-xl",
                                            children: "➡️"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/dashboard.js",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/pages/dashboard.js",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/pages/dashboard.js",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/dashboard.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Activity Streak",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "text-5xl font-bold text-ft-blue",
                                            children: feedbackSummary?.total || 0
                                        }, void 0, false, {
                                            fileName: "[project]/pages/dashboard.js",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-slate-600 dark:text-slate-300 text-sm",
                                            children: "Total logged sessions"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/dashboard.js",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/dashboard.js",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard.js",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                title: "Adaptive Summary",
                                children: !feedbackSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600",
                                    children: "No feedback yet — your plan will adapt once you log sessions."
                                }, void 0, false, {
                                    fileName: "[project]/pages/dashboard.js",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    children: "Easy:"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/dashboard.js",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                feedbackSummary.difficulty.Easy
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/dashboard.js",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    children: "Moderate:"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/dashboard.js",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                feedbackSummary.difficulty.Moderate
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/dashboard.js",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    children: "Hard:"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/dashboard.js",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                feedbackSummary.difficulty.Hard
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/dashboard.js",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                    children: "Missed reps:"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/dashboard.js",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                feedbackSummary.missedRepsCount
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/dashboard.js",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/dashboard.js",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard.js",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard.js",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: "btn-primary text-center",
                                    onClick: regeneratePlan,
                                    children: "Regenerate Adaptive Plan"
                                }, void 0, false, {
                                    fileName: "[project]/pages/dashboard.js",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/onboard/goal",
                                    className: "small-btn text-center",
                                    children: "Start a New Plan"
                                }, void 0, false, {
                                    fileName: "[project]/pages/dashboard.js",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/weekly-plan",
                                    className: "small-btn text-center",
                                    children: "View Full Plan"
                                }, void 0, false, {
                                    fileName: "[project]/pages/dashboard.js",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/dashboard.js",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/dashboard.js",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/dashboard.js",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__66974554._.js.map