// Standard date formatter for event displays
export const eventDateFormatter = new Intl.DateTimeFormat('en-US', {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
});

// Format a date string using the standard event date format
export function formatEventDate(dateString: string): string {
	return eventDateFormatter.format(new Date(dateString));
}

// Get today's date as an ISO string without the time component
export function getTodayISOString(): string {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return today.toISOString().split('T')[0] ?? '';
}

// Format historical moment date (Month Year or Month Day, Year)
export function formatHistoricalMomentDate(year: number, month: number, day?: number): string {
	const options: Intl.DateTimeFormatOptions = {
		month: 'short',
		year: 'numeric',
		timeZone: 'UTC' // Always format in UTC
	};
	// JavaScript Date month is 0-indexed, schema is 1-indexed
	const monthIndex = month - 1;

	if (day) {
		// Construct date using UTC
		const date = new Date(Date.UTC(year, monthIndex, day));
		// Validate the constructed date in UTC (e.g., handle day=31 for Feb)
		if (!isNaN(date.getTime()) && date.getUTCDate() === day) {
			options.day = 'numeric'; // Add day to options only if valid
			return date.toLocaleDateString('en-US', options);
		}
	}

	// Format with just month and year (either day wasn't provided or was invalid)
	const date = new Date(Date.UTC(year, monthIndex));
	return date.toLocaleDateString('en-US', options); // options here only contains month/year/timeZone
}
