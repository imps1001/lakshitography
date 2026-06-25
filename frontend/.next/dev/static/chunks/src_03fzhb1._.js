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
"[project]/src/app/(site)/gallery/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Gallery() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Gallery.useMemo[items]": ()=>active === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GALLERY"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GALLERY"].filter({
                "Gallery.useMemo[items]": (g)=>g.category === active
            }["Gallery.useMemo[items]"])
    }["Gallery.useMemo[items]"], [
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "page-gallery",
        className: "bg-bg min-h-screen pt-32 pb-24 px-6 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow mb-6",
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/gallery/page.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-display text-text-primary leading-[1.05]",
                                children: [
                                    "A handful of ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "italic text-gold",
                                        children: "quiet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(site)/gallery/page.jsx",
                                        lineNumber: 23,
                                        columnNumber: 26
                                    }, this),
                                    " frames."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(site)/gallery/page.jsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-text-secondary text-base lg:text-lg leading-relaxed",
                                children: "Stories from the past year — pieced together from afternoons, kitchens, terraces, and tea-cup tables."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/gallery/page.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(site)/gallery/page.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-testid": "gallery-filters",
                        className: "mt-12 flex flex-wrap gap-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORIES"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-testid": `filter-${c.toLowerCase()}`,
                                onClick: ()=>setActive(c),
                                className: `px-5 py-2 text-xs tracking-eyebrow uppercase border transition-all duration-300 ${active === c ? "bg-gold text-[#0a0a0a] border-gold" : "border-white/15 text-text-secondary hover:border-gold hover:text-gold"}`,
                                children: c
                            }, c, false, {
                                fileName: "[project]/src/app/(site)/gallery/page.jsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/gallery/page.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        className: "mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: items.map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    layout: true,
                                    initial: {
                                        opacity: 0,
                                        y: 18
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: i % 8 * 0.04
                                    },
                                    onClick: ()=>setLightbox(g),
                                    "data-testid": `gallery-item-${i}`,
                                    className: `gallery-tile aspect-[4/5] bg-surface border border-faint ${i % 5 === 0 ? "row-span-2 aspect-[4/6]" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: g.url,
                                            alt: g.category,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(site)/gallery/page.jsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-4 left-4 z-10 text-xs tracking-eyebrow uppercase text-beige opacity-0 group-hover:opacity-100",
                                            children: g.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(site)/gallery/page.jsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, g.url, true, {
                                    fileName: "[project]/src/app/(site)/gallery/page.jsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(site)/gallery/page.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(site)/gallery/page.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(site)/gallery/page.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: lightbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-testid": "gallery-lightbox",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-6",
                    onClick: ()=>setLightbox(null),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-testid": "lightbox-close",
                            className: "absolute top-6 right-6 text-text-primary",
                            onClick: ()=>setLightbox(null),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/app/(site)/gallery/page.jsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(site)/gallery/page.jsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            initial: {
                                scale: 0.96,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            exit: {
                                scale: 0.98,
                                opacity: 0
                            },
                            src: lightbox.url,
                            alt: lightbox.category,
                            className: "max-h-[88vh] max-w-[92vw] object-contain border border-white/10"
                        }, lightbox.url, false, {
                            fileName: "[project]/src/app/(site)/gallery/page.jsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(site)/gallery/page.jsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(site)/gallery/page.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(site)/gallery/page.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Gallery, "CBLfoinKXV0L/kH/x2Wj8t1FeRg=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_03fzhb1._.js.map