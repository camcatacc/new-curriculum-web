import { customRender } from "utils/tests";
describe("customRender snapshots", () => {
	it("customRender with light mode", () => {
		const { container } = customRender(<p>Custom Render</p>);
		expect(container).toMatchSnapshot();
	});
	it("customRender with dark mode", () => {
		const { container } = customRender(<p>Custom Render</p>, undefined, { darkMode: true });
		expect(container).toMatchSnapshot();
	});
});
