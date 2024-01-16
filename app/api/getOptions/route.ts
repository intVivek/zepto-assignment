import { NextResponse } from 'next/server';

export async function GET () {
	try {
        const options = [
            { label: "First Option", value: 1 },
            { label: "Second Option", value: 2 },
            { label: "Third Option", value: 3 },
            { label: "Fourth Option", value: 4 },
            { label: "Fifth Option", value: 5 },
        ]

		return NextResponse.json(options);
	} catch (err) {
		console.log(err);
	}
}