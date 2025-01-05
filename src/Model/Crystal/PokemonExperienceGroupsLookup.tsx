export class PokemonExperienceGroupsLookup {
    private static toUnsigned = (val: number): number => {
        if (val >= 0) {
            return val;
        } else {
            return 0x1000000 - val;
        }
    };

    private static multAndTrunc = (a: number, b: number): number => {
        return (a * b) & 0xFFFFFF;
    };

    private static divAndTrunc = (a: number, b: number): number => {
        return ((a & 0xFFFFFF) / b) & 0xFFFFFF;
    };

    private static addAndTrunc = (a: number, b: number): number => {
        return (a + b) & 0xFFFFFF;
    };

    public static growthRate = (n: number, a: number, b: number, c: number, d: number, e: number): number => {
        /*var cur1 = multAndTrunc(divAndTrunc(multAndTrunc(multAndTrunc(n, n), n), b), a);
        var cur2 = multAndTrunc(multAndTrunc(n, n), c);
        var cur3 = multAndTrunc(d, n);
        var cur4 = e;
    	
        var cur = addAndTrunc(addAndTrunc(addAndTrunc(cur1, cur2), cur3), cur4);*/
        var cur1 = n * n * n / b * a;
        var cur2 = n * n * c;
        var cur3 = n * d;
        var cur4 = e;

        var cur = (cur1 + cur2 + cur3 + cur4);
        if (cur < 0) {
            cur = 0x1000000 + cur;
        }
        cur = cur & 0xFFFFFF;

        return cur;
    };

    private static experienceGroupsKV = {
        "": { name: "", exp_to_level: function (level) { return 0; } },
        0x00: { name: "GROWTH_MEDIUM_FAST", exp_to_level: function (level) { return PokemonExperienceGroupsLookup.growthRate(level, 1, 1, 0, 0, 0); } },
        0x01: { name: "GROWTH_SLIGHTLY_FAST", exp_to_level: function (level) { return PokemonExperienceGroupsLookup.growthRate(level, 3, 4, 10, 0, 30); } },
        0x02: { name: "GROWTH_SLIGHTLY_SLOW", exp_to_level: function (level) { return PokemonExperienceGroupsLookup.growthRate(level, 3, 4, 20, 0, 70); } },
        0x03: { name: "GROWTH_MEDIUM_SLOW", exp_to_level: function (level) { return PokemonExperienceGroupsLookup.growthRate(level, 6, 5, -15, 100, 140); } },
        0x04: { name: "GROWTH_FAST", exp_to_level: function (level) { return PokemonExperienceGroupsLookup.growthRate(level, 4, 5, 0, 0, 0); } },
        0x05: { name: "GROWTH_SLOW", exp_to_level: function (level) { return PokemonExperienceGroupsLookup.growthRate(level, 5, 4, 0, 0, 0); } },
        0x84: { name: "GLITCH", exp_to_level: function (level) { return PokemonExperienceGroupsLookup.growthRate(level, 13, 0, 14, 49, 240); } },
        0x88: { name: "GLITCH", exp_to_level: function (level) { return PokemonExperienceGroupsLookup.growthRate(level, 0, 1, 33, 71, 210); } },
        0x8d: { name: "GLITCH", exp_to_level: function (level) { return PokemonExperienceGroupsLookup.growthRate(level, 4, 0, -90, 14, 36); } },
        0x8f: { name: "GLITCH", exp_to_level: function (level) { return PokemonExperienceGroupsLookup.growthRate(level, 1, 1, 16, 219, 14); } },
    };

    private static keyValuePairs = Object.entries(this.experienceGroupsKV);
    public static experienceGroups = new Map(this.keyValuePairs);
};

export default PokemonExperienceGroupsLookup;
