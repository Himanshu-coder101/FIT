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
"[project]/components/Tooltip.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function Tooltip({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "group relative inline-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "cursor-pointer px-1 text-slate-400 hover:text-slate-200",
                children: "ⓘ"
            }, void 0, false, {
                fileName: "[project]/components/Tooltip.js",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute hidden group-hover:block z-30 w-52 p-2 text-sm rounded-lg bg-slate-900 text-white border border-slate-700 shadow-lg -right-2 top-6",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/Tooltip.js",
                lineNumber: 5,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Tooltip.js",
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
"[project]/lib/weights.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/weights.js
// Simple localStorage-backed per-exercise weight tracker.
// Keyed by exercise name (string). Values stored as { weight: number, unit: 'kg'|'lb', updatedAt: ISOString }
__turbopack_context__.s([
    "getAllWeights",
    ()=>getAllWeights,
    "getExerciseWeight",
    ()=>getExerciseWeight,
    "removeExerciseWeight",
    ()=>removeExerciseWeight,
    "setExerciseWeight",
    ()=>setExerciseWeight
]);
const KEY = 'ft_ex_weights_v1';
/** read whole store */ function readStore() {
    if ("TURBOPACK compile-time truthy", 1) return {};
    //TURBOPACK unreachable
    ;
}
/** write whole store */ function writeStore(obj) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getExerciseWeight(exerciseName) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const store = undefined;
}
function setExerciseWeight(exerciseName, weight, unit = 'kg') {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const store = undefined;
}
function removeExerciseWeight(exerciseName) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const store = undefined;
}
function getAllWeights() {
    if ("TURBOPACK compile-time truthy", 1) return {};
    //TURBOPACK unreachable
    ;
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
"[project]/pages/day/[day].js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DayPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BottomNav$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BottomNav.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Tooltip.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$feedback$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/feedback.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$weights$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/weights.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$planGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/planGenerator.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// Small icon helper based on exercise name
function getIconForExercise(name) {
    name = name.toLowerCase();
    if (name.includes("squat")) return "🦵";
    if (name.includes("dead")) return "🏋️‍♂️";
    if (name.includes("bench")) return "🏋️‍♀️";
    if (name.includes("press")) return "💪";
    if (name.includes("row")) return "🔄";
    if (name.includes("curl")) return "💪";
    if (name.includes("pull")) return "⬆️";
    if (name.includes("push")) return "➡️";
    if (name.includes("lunge")) return "🦿";
    if (name.includes("raise")) return "✨";
    return "🔥";
}
// Muscle group color accents
function getColorAccent(name) {
    name = name.toLowerCase();
    if (name.includes("squat") || name.includes("lunge")) return "bg-purple-500";
    if (name.includes("bench") || name.includes("press")) return "bg-red-500";
    if (name.includes("row") || name.includes("pull")) return "bg-blue-500";
    if (name.includes("curl") || name.includes("raise")) return "bg-yellow-500";
    return "bg-teal-500";
}
function DayPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { day } = router.query;
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    // Swap menu
    const [swapIndex, setSwapIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [alts, setAlts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!day) return;
        fetch("/api/plan").then((r)=>r.json()).then((plan)=>{
            const index = Number(day) - 1;
            const s = plan.sessions?.[index];
            if (s) setSession(JSON.parse(JSON.stringify(s)));
            setLoading(false);
        });
    }, [
        day
    ]);
    function saveWeight(name, inputEl) {
        if (!inputEl.value) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$weights$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setExerciseWeight"])(name, Number(inputEl.value), "kg");
        inputEl.classList.add("ring", "ring-ft-blue");
        setTimeout(()=>inputEl.classList.remove("ring", "ring-ft-blue"), 800);
    }
    function openSwap(i, ex) {
        const eq = ex.equipment?.[0] || "barbell";
        let pool = "gym";
        if (eq === "dumbbell" || eq === "bands") pool = "dumbbell";
        if (eq === "bodyweight") pool = "body";
        const alternatives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$planGenerator$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAlternatives"])(ex.name, pool, 5);
        setSwapIndex(i);
        setAlts(alternatives);
    }
    function applySwap(i, newEx) {
        const updated = {
            ...session
        };
        updated.exercises[i] = {
            ...newEx,
            sets: session.exercises[i].sets,
            reps: session.exercises[i].reps,
            intensity_pct: session.exercises[i].intensity_pct,
            rest_sec: session.exercises[i].rest_sec,
            rir: session.exercises[i].rir,
            notes: newEx.notes || session.exercises[i].notes
        };
        setSession(updated);
        setSwapIndex(null);
        setAlts([]);
    }
    function submitFeedback(e) {
        e.preventDefault();
        const f = e.target;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$feedback$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["saveSessionFeedback"])({
            sessionIndex: Number(day) - 1,
            difficulty: f.difficulty.value,
            soreness: f.soreness.value,
            missedReps: f.missed.checked,
            notes: f.notes.value
        });
        alert("Feedback saved. Your plan will adapt.");
        f.reset();
    }
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/day/[day].js",
                lineNumber: 115,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "container p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: "Loading session…"
                }, void 0, false, {
                    fileName: "[project]/pages/day/[day].js",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/day/[day].js",
                lineNumber: 116,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    if (!session) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/day/[day].js",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "container p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-red-500",
                    children: "Session not found."
                }, void 0, false, {
                    fileName: "[project]/pages/day/[day].js",
                    lineNumber: 127,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/day/[day].js",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/day/[day].js",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BottomNav$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/day/[day].js",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "container mb-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mt-4 mb-6",
                        children: session.day
                    }, void 0, false, {
                        fileName: "[project]/pages/day/[day].js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid gap-5",
                        children: session.exercises.map((ex, i)=>{
                            const savedWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$weights$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getExerciseWeight"])(ex.name);
                            const savedDisplay = savedWeight ? `${savedWeight.weight}kg` : null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "rounded-3xl p-5 shadow-md bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/10 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl",
                                                        children: getIconForExercise(ex.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/day/[day].js",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                className: "font-bold text-lg",
                                                                children: ex.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/day/[day].js",
                                                                lineNumber: 157,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-600 dark:text-slate-300 text-sm",
                                                                children: ex.notes
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/day/[day].js",
                                                                lineNumber: 158,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/day/[day].js",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: `w-3 h-3 rounded-full ${getColorAccent(ex.name)} shadow`
                                            }, void 0, false, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/day/[day].js",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mt-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1 rounded-lg bg-slate-200 dark:bg-white/10",
                                                children: [
                                                    ex.sets,
                                                    " x ",
                                                    ex.reps
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1 rounded-lg bg-blue-200 dark:bg-blue-900/30",
                                                children: [
                                                    ex.intensity_pct,
                                                    "% 1RM"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this),
                                            ex.rir !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1 rounded-lg bg-teal-200 dark:bg-teal-900/30",
                                                children: [
                                                    "RIR ",
                                                    ex.rir
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 182,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1 rounded-lg bg-yellow-200 dark:bg-yellow-900/30",
                                                children: [
                                                    ex.rest_sec,
                                                    "s rest"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/day/[day].js",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                label: "Intensity relative to your estimated max"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                label: "RIR = reps you leave before failure"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                label: "Rest time between sets"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/day/[day].js",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                id: `w${i}`,
                                                placeholder: "kg",
                                                defaultValue: savedDisplay ? savedDisplay.replace("kg", "") : "",
                                                className: "px-3 py-2 rounded-xl w-32 bg-white/70 dark:bg-white/5 border border-white/30 dark:border-white/10"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "small-btn",
                                                onClick: ()=>saveWeight(ex.name, document.getElementById(`w${i}`)),
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-600 dark:text-slate-400",
                                                children: savedDisplay || "No saved weight"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/day/[day].js",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "small-btn",
                                            onClick: ()=>openSwap(i, ex),
                                            children: "Swap Exercise"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/day/[day].js",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/day/[day].js",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this),
                                    swapIndex === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "mt-4 p-4 rounded-xl bg-slate-100 dark:bg-white/10 border border-white/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold mb-2",
                                                children: "Choose alternative:"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 235,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "grid gap-2",
                                                children: alts.map((alt, ai)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        className: "p-3 rounded-xl bg-white dark:bg-white/5 border border-white/20 text-left hover:bg-ft-blue/10",
                                                        onClick: ()=>applySwap(i, alt),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold",
                                                                children: alt.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/day/[day].js",
                                                                lineNumber: 244,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "text-xs opacity-60",
                                                                children: (alt.equipment || []).join(", ")
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/day/[day].js",
                                                                lineNumber: 245,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, ai, true, {
                                                        fileName: "[project]/pages/day/[day].js",
                                                        lineNumber: 239,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 237,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSwapIndex(null),
                                                className: "mt-3 small-btn",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/day/[day].js",
                                                lineNumber: 252,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/day/[day].js",
                                        lineNumber: 234,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/pages/day/[day].js",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/pages/day/[day].js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: "Session Feedback",
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                            onSubmit: submitFeedback,
                            className: "grid gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "font-semibold",
                                            children: "Difficulty"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/day/[day].js",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                            name: "difficulty",
                                            className: "mt-1 p-3 rounded-xl bg-white/60 dark:bg-white/10 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    children: "Easy"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/day/[day].js",
                                                    lineNumber: 275,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    children: "Moderate"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/day/[day].js",
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    children: "Hard"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/day/[day].js",
                                                    lineNumber: 277,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/day/[day].js",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/day/[day].js",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "font-semibold",
                                            children: "Soreness"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/day/[day].js",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                            name: "soreness",
                                            className: "mt-1 p-3 rounded-xl bg-white/60 dark:bg-white/10 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    children: "None"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/day/[day].js",
                                                    lineNumber: 287,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    children: "Mild"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/day/[day].js",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                    children: "High"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/day/[day].js",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/day/[day].js",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/day/[day].js",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            name: "missed",
                                            id: "missed"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/day/[day].js",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            htmlFor: "missed",
                                            children: "Missed any reps?"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/day/[day].js",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/day/[day].js",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                            className: "font-semibold",
                                            children: "Notes"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/day/[day].js",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                            name: "notes",
                                            className: "mt-1 p-3 rounded-xl bg-white/60 dark:bg-white/10 w-full",
                                            placeholder: "Fatigue, discomfort, performance notes…"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/day/[day].js",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/day/[day].js",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: "btn-primary w-full mt-2",
                                    children: "Save Feedback"
                                }, void 0, false, {
                                    fileName: "[project]/pages/day/[day].js",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/day/[day].js",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/day/[day].js",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/day/[day].js",
                lineNumber: 137,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0272beed._.js.map