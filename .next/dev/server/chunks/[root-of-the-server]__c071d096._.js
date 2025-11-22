module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/aiExerciseSelector.js [api] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/planGenerator.js [api] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aiExerciseSelector$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/aiExerciseSelector.js [api] (ecmascript)");
;
function generateProfessionalPlan(profile = {}) {
    const plan = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aiExerciseSelector$2e$js__$5b$api$5d$__$28$ecmascript$29$__["createPlan"](profile);
    plan.profile = plan.profile || profile;
    return plan;
}
function getAlternatives(name, pool = 'gym', count = 5, profile = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$aiExerciseSelector$2e$js__$5b$api$5d$__$28$ecmascript$29$__["getAlternatives"](name, pool, count, profile);
}
const __TURBOPACK__default__export__ = generateProfessionalPlan;
}),
"[project]/pages/api/plan.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// pages/api/plan.js
__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$planGenerator$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/planGenerator.js [api] (ecmascript)");
;
let savedPlan = null;
async function handler(req, res) {
    if (req.method === 'POST') {
        const profile = req.body || {};
        const plan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$planGenerator$2e$js__$5b$api$5d$__$28$ecmascript$29$__["default"])(profile);
        // If GPT key exists → refine the plan automatically
        if (process.env.OPENAI_API_KEY) {
            try {
                const refineUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/ai-refine-plan` : 'http://localhost:3000/api/ai-refine-plan';
                const refineRes = await fetch(refineUrl, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        plan,
                        profile
                    })
                });
                if (refineRes.ok) {
                    const json = await refineRes.json();
                    const refined = json.refined || plan;
                    savedPlan = refined;
                    return res.status(200).json(refined);
                }
            } catch (err) {
                console.warn("AI refine failed:", err.message);
            }
        }
        // fallback to raw plan
        savedPlan = plan;
        return res.status(200).json(plan);
    } else {
        if (!savedPlan) {
            savedPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$planGenerator$2e$js__$5b$api$5d$__$28$ecmascript$29$__["default"])({
                goal: 'General Fitness',
                experience: 'beginner',
                daysPerWeek: 3,
                timePerSession: 40,
                equipment: [
                    'bodyweight'
                ]
            });
        }
        return res.status(200).json(savedPlan);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c071d096._.js.map