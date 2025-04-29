from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse, JSONResponse
from authlib.integrations.starlette_client import OAuth
from starlette.config import Config
from starlette.middleware.sessions import SessionMiddleware

app = FastAPI()

# Load secrets from a .env file
config = Config('.env')

# Initialize OAuth
oauth = OAuth(config)

# Register providers
oauth.register(
    name='google',
    client_id=config('GOOGLE_CLIENT_ID'),
    client_secret=config('GOOGLE_CLIENT_SECRET'),
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'}
)

oauth.register(
    name='github',
    client_id=config('GITHUB_CLIENT_ID'),
    client_secret=config('GITHUB_CLIENT_SECRET'),
    access_token_url='https://github.com/login/oauth/access_token',
    access_token_params=None,
    authorize_url='https://github.com/login/oauth/authorize',
    authorize_params=None,
    api_base_url='https://api.github.com/',
    client_kwargs={'scope': 'user:email'},
)

oauth.register(
    name='microsoft',
    client_id=config('MICROSOFT_CLIENT_ID'),
    client_secret=config('MICROSOFT_CLIENT_SECRET'),
    server_metadata_url='https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'},
)

# Add session middleware for OAuth to work
app.add_middleware(SessionMiddleware, secret_key="super-secret-session-key")

# 🛤 Generic login endpoint (you pass provider name)
@app.get('/login/{provider}')
async def login(request: Request, provider: str):
    redirect_uri = request.url_for('auth', provider=provider)
    oauth_provider = oauth.create_client(provider)
    return await oauth_provider.authorize_redirect(request, redirect_uri)

# 🚏 Generic callback endpoint
@app.get('/auth/{provider}')
async def auth(request: Request, provider: str):
    oauth_provider = oauth.create_client(provider)
    token = await oauth_provider.authorize_access_token(request)

    if provider == 'github':
        user = await oauth_provider.get('user', token=token)
        user_info = user.json()
    else:
        user_info = await oauth_provider.parse_id_token(request, token)

    # Return user info JSON
    return JSONResponse(user_info)

# 🏠 Simple home route
@app.get('/')
def homepage():
    return {"message": "Welcome! Go to /login/google, /login/github, or /login/microsoft"}
