const games = [
    { id: 1,  game: "PERCEPTUAL: DAM",      duration: 54,  performance: 177, version: "alpha" },
    { id: 1,  game: "CUTE CRY",             duration: 48,  performance: 182, version: "demo" },
    { id: 1,  game: "Night Walk",           duration: 73,  performance: 158, version: "beta" },

    { id: 2,  game: "PERCEPTUAL: Penance",  duration: 61,  performance: 169, version: "demo" },
    { id: 2,  game: "Jura: New Year 2026",  duration: 86,  performance: 166, version: "release" },

    { id: 3,  game: "PERCEPTUAL: DAM",      duration: 67,  performance: 192, version: "beta" },
    { id: 3,  game: "PERCEPTUAL: Penance",  duration: 44,  performance: 151, version: "alpha" },
    { id: 3,  game: "Night Walk",           duration: 81,  performance: 147, version: "preview" },

    { id: 4,  game: "Jura: New Year 2026",  duration: 92,  performance: 158, version: "demo" },

    { id: 5,  game: "CUTE CRY",             duration: 39,  performance: 194, version: "release" },
    { id: 5,  game: "Night Walk",           duration: 95,  performance: 141, version: "release" },

    { id: 6,  game: "PERCEPTUAL: DAM",      duration: 42,  performance: 185, version: "release" },
    { id: 6,  game: "PERCEPTUAL: Penance",  duration: 58,  performance: 134, version: "prototype" },
    { id: 6,  game: "Jura: New Year 2026",  duration: 71,  performance: 171, version: "alpha" },
    { id: 6,  game: "CUTE CRY",             duration: 64,  performance: 176, version: "demo" },

    { id: 7,  game: "Night Walk",           duration: 56,  performance: 172, version: "prototype" },
    { id: 7,  game: "PERCEPTUAL: DAM",      duration: 105, performance: 160, version: "hotfix" },

    { id: 8,  game: "PERCEPTUAL: Penance",  duration: 52,  performance: 145, version: "beta" },
    { id: 8,  game: "Jura: New Year 2026",  duration: 47,  performance: 179, version: "release" },
    { id: 8,  game: "CUTE CRY",             duration: 88,  performance: 163, version: "alpha" },

    { id: 9,  game: "PERCEPTUAL: DAM",      duration: 29,  performance: 205, version: "alpha" },

    { id: 10, game: "PERCEPTUAL: Penance",  duration: 77,  performance: 118, version: "release" },
    { id: 10, game: "Jura: New Year 2026",  duration: 66,  performance: 154, version: "demo" },
    { id: 10, game: "CUTE CRY",             duration: 34,  performance: 208, version: "preview" },
    { id: 10, game: "Night Walk",           duration: 69,  performance: 161, version: "beta" },

    { id: 11, game: "PERCEPTUAL: DAM",      duration: 90,  performance: 172, version: "beta" },
    { id: 11, game: "PERCEPTUAL: Penance",  duration: 112, performance: 131, version: "prototype" },

    { id: 12, game: "Jura: New Year 2026",  duration: 38,  performance: 188, version: "alpha" },
    { id: 12, game: "CUTE CRY",             duration: 72,  performance: 174, version: "release" },
    { id: 12, game: "Night Walk",           duration: 43,  performance: 196, version: "demo" },

    { id: 13, game: "PERCEPTUAL: DAM",      duration: 51,  performance: 196, version: "release" },
    { id: 13, game: "PERCEPTUAL: Penance",  duration: 64,  performance: 127, version: "beta" },
    { id: 13, game: "Jura: New Year 2026",  duration: 83,  performance: 162, version: "preview" },

    { id: 14, game: "CUTE CRY",             duration: 57,  performance: 187, version: "hotfix" },

    { id: 15, game: "Night Walk",           duration: 98,  performance: 149, version: "release" },
    { id: 15, game: "PERCEPTUAL: DAM",      duration: 73,  performance: 181, version: "hotfix" },
    { id: 15, game: "PERCEPTUAL: Penance",  duration: 22,  performance: 110, version: "prototype" },
    { id: 15, game: "Jura: New Year 2026",  duration: 99,  performance: 149, version: "release" },

    { id: 16, game: "CUTE CRY",             duration: 45,  performance: 201, version: "alpha" },
    { id: 16, game: "Night Walk",           duration: 84,  performance: 156, version: "demo" },

    { id: 17, game: "PERCEPTUAL: DAM",      duration: 36,  performance: 210, version: "alpha" },
    { id: 17, game: "PERCEPTUAL: Penance",  duration: 95,  performance: 139, version: "release" },
    { id: 17, game: "Jura: New Year 2026",  duration: 57,  performance: 173, version: "demo" },
    { id: 17, game: "CUTE CRY",             duration: 41,  performance: 199, version: "beta" },
    { id: 17, game: "Night Walk",           duration: 62,  performance: 168, version: "preview" },

    { id: 18, game: "PERCEPTUAL: DAM",      duration: 120, performance: 158, version: "beta" },
    { id: 18, game: "PERCEPTUAL: Penance",  duration: 49,  performance: 144, version: "beta" },

    { id: 19, game: "Jura: New Year 2026",  duration: 61,  performance: 167, version: "alpha" },
    { id: 19, game: "CUTE CRY",             duration: 93,  performance: 152, version: "prototype" },
    { id: 19, game: "Night Walk",           duration: 58,  performance: 179, version: "release" },

    { id: 20, game: "PERCEPTUAL: DAM",      duration: 78,  performance: 190, version: "release" },
    { id: 20, game: "PERCEPTUAL: Penance",  duration: 55,  performance: 136, version: "prototype" },
    { id: 20, game: "Jura: New Year 2026",  duration: 69,  performance: 176, version: "preview" },
    { id: 20, game: "CUTE CRY",             duration: 50,  performance: 184, version: "demo" },

    { id: 21, game: "Night Walk",           duration: 75,  performance: 164, version: "hotfix" },

    { id: 22, game: "PERCEPTUAL: DAM",      duration: 82,  performance: 199, version: "hotfix" },
    { id: 22, game: "PERCEPTUAL: Penance",  duration: 44,  performance: 128, version: "release" },
    { id: 22, game: "Jura: New Year 2026",  duration: 76,  performance: 168, version: "release" },

    { id: 23, game: "CUTE CRY",             duration: 37,  performance: 206, version: "alpha" },
    { id: 23, game: "Night Walk",           duration: 88,  performance: 153, version: "beta" },

    { id: 24, game: "PERCEPTUAL: DAM",      duration: 58,  performance: 183, version: "demo" },
    { id: 24, game: "PERCEPTUAL: Penance",  duration: 63,  performance: 142, version: "alpha" },
    { id: 24, game: "Night Walk",           duration: 47,  performance: 189, version: "release" },

    { id: 25, game: "Jura: New Year 2026",  duration: 80,  performance: 161, version: "beta" },
    { id: 25, game: "CUTE CRY",             duration: 52,  performance: 191, version: "preview" }
];
