from fastapi import APIRouter
from fastapi.responses import HTMLResponse


router = APIRouter(prefix="/auth")


@router.get("/google/callback", response_class=HTMLResponse, include_in_schema=False)
def google_sign_in_callback_status() -> HTMLResponse:
    return HTMLResponse(
        content="""<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Google Sign-In</title>
  </head>
  <body>
    <main>
      <h1>Google Sign-In</h1>
      <p>The Google Sign-In callback is ready.</p>
      <p>Return to the application and use Continue with Google.</p>
    </main>
  </body>
</html>""",
        headers={
            "Cache-Control": "no-store",
            "Pragma": "no-cache",
        },
    )
