// TODO: Simplify this function
function calculateDirectionFromNumberColumns(i: number, total: number, numPerRow: number): "fromLeft" | "fromRight" | "fromBottom" {
	// If everything does not fit in a row
	if (numPerRow < total) {
		// We calculate the number of items in the last row
		let nItemsLastRow = total % numPerRow;
		// We calculate the position from which the items will be in the last row
		let threshold = total - nItemsLastRow;
		// And we calculate the item position in that row
		let posInNewRow = i - numPerRow;

		// If the threshold is smaller than the item position and there are remaining items to be placed enter this conditional
		// If not, then the default method can be applied
		if (threshold < i && nItemsLastRow !== 0) {
			// If there is only one item in the last row, it must come from the bottom
			if (nItemsLastRow === 1) return "fromBottom";
			// We use the default method BUT with the position of the item IN THE LAST ROW
			switch (posInNewRow % nItemsLastRow) {
				case 0:
					return "fromRight";
				case 1:
					return "fromLeft";
				default:
					return "fromBottom";
			}
		}
	}

	switch (
		i % numPerRow //
	) {
		case 0:
			return "fromRight";
		case 1:
			return "fromLeft";
		default:
			return "fromBottom";
	}
}

export default calculateDirectionFromNumberColumns;
