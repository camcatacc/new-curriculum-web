// Functions
import calculateDirectionFromNumberColumns from "utils/calculateDirectionFromNumberColumns";

// Tests
describe("To return the correct value if total and numPerRow are 3", () => {
	it("i=1, total=3, numPerRow=3", () => {
		expect(calculateDirectionFromNumberColumns(1, 3, 3)).toBe("fromLeft");
	});
	it("i=2, total=3, numPerRow=3", () => {
		expect(calculateDirectionFromNumberColumns(2, 3, 3)).toBe("fromBottom");
	});
	it("i=3, total=3, numPerRow=3", () => {
		expect(calculateDirectionFromNumberColumns(3, 3, 3)).toBe("fromRight");
	});
});

describe("To return the correct value if total=5 and numPerRow are 2", () => {
	it("i=1, total=5, numPerRow=2", () => {
		expect(calculateDirectionFromNumberColumns(1, 5, 2)).toBe("fromLeft");
	});
	it("i=2, total=5, numPerRow=2", () => {
		expect(calculateDirectionFromNumberColumns(2, 5, 2)).toBe("fromRight");
	});
	it("i=3, total=5, numPerRow=2", () => {
		expect(calculateDirectionFromNumberColumns(3, 5, 2)).toBe("fromLeft");
	});
	it("i=4, total=5, numPerRow=2", () => {
		expect(calculateDirectionFromNumberColumns(4, 5, 2)).toBe("fromRight");
	});
	it("i=5, total=5, numPerRow=2", () => {
		expect(calculateDirectionFromNumberColumns(5, 5, 2)).toBe("fromBottom");
	});
});

describe("To return the correct value if total=5 and numPerRow are 4", () => {
	it("i=1, total=5, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(1, 5, 4)).toBe("fromLeft");
	});
	it("i=2, total=5, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(2, 5, 4)).toBe("fromBottom");
	});
	it("i=3, total=5, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(3, 5, 4)).toBe("fromBottom");
	});
	it("i=4, total=5, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(4, 5, 4)).toBe("fromRight");
	});
	it("i=5, total=5, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(5, 5, 4)).toBe("fromBottom");
	});
});

describe("To return the correct value if total=7 and numPerRow are 4", () => {
	it("i=1, total=7, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(1, 7, 4)).toBe("fromLeft");
	});
	it("i=2, total=7, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(2, 7, 4)).toBe("fromBottom");
	});
	it("i=3, total=7, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(3, 7, 4)).toBe("fromBottom");
	});
	it("i=4, total=7, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(4, 7, 4)).toBe("fromRight");
	});
	it("i=5, total=7, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(5, 7, 4)).toBe("fromLeft");
	});
	it("i=6, total=7, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(6, 7, 4)).toBe("fromBottom");
	});
	it("i=7, total=7, numPerRow=4", () => {
		expect(calculateDirectionFromNumberColumns(7, 7, 4)).toBe("fromRight");
	});
});
