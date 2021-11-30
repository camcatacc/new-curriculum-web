import getEntries from "services/cms/contentful";

describe("contentful api", () => {
	it("Returns an object with the data", async () => {
		await expect(getEntries("ctUid", "es-es")).resolves.toEqual([{ id: "field1" }, { id: "field2" }]);
	});
	it("When it crashes, it console.logs the error", async () => {
		console.error = jest.fn();
		await getEntries("error", "es-es", { id: "id" });
		expect(console.error).toHaveBeenCalledWith("Error");
	});
});
