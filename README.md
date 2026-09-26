# Git History Data Experiment

A small Node.js command-line experiment for reading timestamped JSON records and producing a compact, structured summary.

## Highlights

- Read a JSON record from the default file or a supplied path
- Validate and normalise ISO timestamps
- Return consistent JSON output for scripts or manual inspection
- Report clear errors when the input cannot be read or parsed
- Run with the standard Node.js runtime

## Run

Install dependencies with npm install, then run:

    npm start
    npm start -- ./another-record.json

## Technical approach

The command keeps file handling, date validation and output formatting separate. The sample data is deliberately small so the experiment remains easy to inspect while demonstrating a useful command-line pattern.
