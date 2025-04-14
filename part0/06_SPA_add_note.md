```mermaid
sequenceDiagram
    participant browser
    participant server

    
    Note right of browser: Button "Submit" clicked

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: created note with status code 201
    deactivate server

    Note right of browser: important is that the browser renders the new note itself
```