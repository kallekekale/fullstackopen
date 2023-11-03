sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of browser: The request includes a note in a JSON format which includes contents and date.

    server-->>browser:
    deactivate server
    Note right of browser: The browser stays on the same site and doesn't execute any other HTTP -requests.