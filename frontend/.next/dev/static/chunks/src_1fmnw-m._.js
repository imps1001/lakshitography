(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/content.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "GALLERY",
    ()=>GALLERY,
    "HERO_IMAGES",
    ()=>HERO_IMAGES,
    "HERO_POOL",
    ()=>HERO_POOL,
    "SERVICES",
    ()=>SERVICES,
    "WHATSAPP_NUMBER",
    ()=>WHATSAPP_NUMBER
]);
// Real Lakshitography images (5 client-shot photos) + a few stock fillers for
// categories not yet represented. Swap the stock ones when more real work arrives.
const REAL = {
    wedding_bride: "https://customer-assets.emergentagent.com/job_moments-home/artifacts/asow04c1_DSC03405.ARW.jpg",
    kids_two_girls: "https://customer-assets.emergentagent.com/job_moments-home/artifacts/28jggwuz_DSC00237.jpg",
    kid_pink_tutu: "https://customer-assets.emergentagent.com/job_moments-home/artifacts/e231pwru_DSC00275.jpg",
    baby_boy_party: "https://customer-assets.emergentagent.com/job_moments-home/artifacts/777br5s9_DSC00005.jpg",
    kids_celebration: "https://customer-assets.emergentagent.com/job_moments-home/artifacts/ndqimdo2_IMG_20251220_231929.jpg"
};
// Fillers (kept warm + intimate, swap with real work later)
const STOCK = {
    couple_a: "https://images.unsplash.com/photo-1769566025603-2e694fb2ff68?auto=format&fit=crop&q=85&w=900",
    couple_b: "https://images.unsplash.com/photo-1758225104742-718edea1f371?auto=format&fit=crop&q=85&w=900",
    family_a: "https://images.unsplash.com/photo-1770587899537-23e617e17767?auto=format&fit=crop&q=85&w=900",
    family_b: "https://images.unsplash.com/photo-1595950009887-e9842bcbc1ae?auto=format&fit=crop&q=85&w=900",
    gathering: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=85&w=900"
};
const SERVICES = [
    {
        slug: "couple-lifestyle",
        name: "Couple Lifestyle Shoot",
        duration: "60–90 mins",
        photos: "20–30 edited photos",
        price: "₹6,500 – ₹9,500",
        people: "Just the two of you",
        addOn: "Optional 30-sec reel add-on",
        blurb: "Slow mornings, soft sunlight, quiet glances. A relaxed walk-through of the way you two actually exist together.",
        image: STOCK.couple_a
    },
    {
        slug: "family-portraits",
        name: "Family Portraits",
        duration: "75–120 mins",
        photos: "30–45 edited photos",
        price: "₹8,500 – ₹12,500",
        people: "Small families (up to 6)",
        addOn: "Optional family video story",
        blurb: "Real laughter, real chaos, the kind of family photos you'll actually frame — not the stiff studio kind.",
        image: REAL.wedding_bride
    },
    {
        slug: "kids-birthday",
        name: "Kids' Birthday at Home",
        duration: "2–3 hours",
        photos: "40–60 edited photos",
        price: "₹9,500 – ₹14,000",
        people: "Up to 25 close guests",
        addOn: "Highlight reel add-on",
        blurb: "Tiny hands on cake, the candle moment, that one cousin crying — birthdays exactly as they happen.",
        image: REAL.kid_pink_tutu
    },
    {
        slug: "anniversary",
        name: "Intimate Anniversary",
        duration: "90–120 mins",
        photos: "30–40 edited photos",
        price: "₹8,000 – ₹11,500",
        people: "Couple + close family",
        addOn: "Optional cinematic clip",
        blurb: "A return to where it began, or simply the home you've built. Quiet, romantic, unhurried.",
        image: REAL.wedding_bride
    },
    {
        slug: "kitty-gathering",
        name: "Kitty Party / Close Gathering",
        duration: "2 hours",
        photos: "35–50 edited photos",
        price: "₹7,500 – ₹10,500",
        people: "Up to 15 friends",
        addOn: "Group portrait set",
        blurb: "The afternoon stretches. Tea, laughter, gossip — captured without interrupting a single moment.",
        image: STOCK.gathering
    }
];
const HERO_IMAGES = [
    REAL.wedding_bride,
    REAL.kid_pink_tutu,
    REAL.baby_boy_party,
    REAL.kids_two_girls
];
const HERO_POOL = [
    REAL.wedding_bride,
    REAL.kid_pink_tutu,
    REAL.baby_boy_party,
    REAL.kids_two_girls,
    REAL.kids_celebration,
    STOCK.couple_a,
    STOCK.family_a,
    STOCK.gathering
];
const GALLERY = [
    {
        category: "Anniversary",
        url: REAL.wedding_bride
    },
    {
        category: "Kids",
        url: REAL.kid_pink_tutu
    },
    {
        category: "Kids",
        url: REAL.kids_two_girls
    },
    {
        category: "Kids",
        url: REAL.baby_boy_party
    },
    {
        category: "Kids",
        url: REAL.kids_celebration
    },
    {
        category: "Couples",
        url: STOCK.couple_a
    },
    {
        category: "Couples",
        url: STOCK.couple_b
    },
    {
        category: "Families",
        url: STOCK.family_a
    },
    {
        category: "Families",
        url: STOCK.family_b
    },
    {
        category: "Gatherings",
        url: STOCK.gathering
    }
];
const CATEGORIES = [
    "All",
    "Couples",
    "Families",
    "Kids",
    "Anniversary",
    "Gatherings"
];
const WHATSAPP_NUMBER = "919876543210"; // dummy — replace with Lakshita's real number
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(site)/services/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "page-services",
        className: "bg-bg min-h-screen pt-32 pb-24 px-6 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.9,
                        ease: [
                            0.22,
                            0.61,
                            0.36,
                            1
                        ]
                    },
                    className: "max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-6",
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(site)/services/page.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-serif-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-display text-text-primary leading-[1.05]",
                            children: [
                                "Sessions designed to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic text-gold",
                                    children: "feel slow"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(site)/services/page.jsx",
                                    lineNumber: 19,
                                    columnNumber: 34
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(site)/services/page.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 text-text-secondary text-base lg:text-lg leading-relaxed",
                            children: "Transparent pricing, modest groups, and a finishing process that takes its time. Every session includes a pre-shoot call to talk through your day."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(site)/services/page.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(site)/services/page.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-20 grid md:grid-cols-2 gap-8 lg:gap-10",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                            "data-testid": `service-card-${s.slug}`,
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: "-60px"
                            },
                            transition: {
                                duration: 0.8,
                                delay: i * 0.05,
                                ease: [
                                    0.22,
                                    0.61,
                                    0.36,
                                    1
                                ]
                            },
                            className: "group bg-surface border border-faint overflow-hidden hover:border-gold/40 transition-colors duration-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-[16/10] overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: s.image,
                                        alt: s.name,
                                        className: "w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(site)/services/page.jsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(site)/services/page.jsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 lg:p-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline justify-between gap-4 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-serif-display text-3xl text-text-primary leading-tight",
                                                    children: s.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(site)/services/page.jsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-serif-display italic text-2xl text-gold",
                                                    children: s.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(site)/services/page.jsx",
                                                    lineNumber: 45,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(site)/services/page.jsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-text-secondary leading-relaxed",
                                            children: s.blurb
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(site)/services/page.jsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 grid grid-cols-2 gap-y-5 gap-x-4 border-t border-faint pt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                                    label: "Duration",
                                                    value: s.duration
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(site)/services/page.jsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
                                                    label: "Delivery",
                                                    value: s.photos
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(site)/services/page.jsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                                    label: "Group size",
                                                    value: s.people
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(site)/services/page.jsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Detail, {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"],
                                                    label: "Add-on",
                                                    value: s.addOn
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(site)/services/page.jsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(site)/services/page.jsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/contact?service=${s.slug}`,
                                            "data-testid": `book-${s.slug}`,
                                            className: "mt-8 inline-flex items-center gap-2 text-sm tracking-eyebrow uppercase text-gold hover:text-text-primary transition-colors",
                                            children: [
                                                "Book this session ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(site)/services/page.jsx",
                                                    lineNumber: 61,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(site)/services/page.jsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(site)/services/page.jsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.slug, true, {
                            fileName: "[project]/src/app/(site)/services/page.jsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/(site)/services/page.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-24 border border-faint p-10 lg:p-14 bg-surface",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow mb-4",
                            children: "A note on pricing"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(site)/services/page.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-serif-display italic text-2xl lg:text-3xl text-beige max-w-3xl leading-snug",
                            children: "Prices vary based on location and travel. I keep brackets tight so you always know what to expect — no surprises, no upsells."
                        }, void 0, false, {
                            fileName: "[project]/src/app/(site)/services/page.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(site)/services/page.jsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(site)/services/page.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(site)/services/page.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Services;
function Detail({ icon: Icon, label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 16,
                className: "text-gold mt-1 shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/services/page.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs tracking-eyebrow uppercase text-text-secondary",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/services/page.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-text-primary mt-1 leading-snug",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/services/page.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/services/page.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(site)/services/page.jsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c1 = Detail;
var _c, _c1;
__turbopack_context__.k.register(_c, "Services");
__turbopack_context__.k.register(_c1, "Detail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1fmnw-m._.js.map