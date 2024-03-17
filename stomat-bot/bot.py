import aiohttp
from aiohttp import web
import asyncio
import requests
import ssl
async def handle(request):
    print('test1')
    data = await request.json()
    phone = data.get('РўРµР»РµС„РѕРЅ', '')
    name = data.get('РРјСЏ', '')
    print(f'Received data from frontend: РўРµР»РµС„РѕРЅ - {phone}, РРјСЏ - {name}')
    if phone and name:

        bot_token = ''
        chat_id = ''
        message = f'РќРѕРІС‹Рµ РґР°РЅРЅС‹Рµ: РўРµР»РµС„РѕРЅ - {phone}, РРјСЏ - {name}'
        send_message(bot_token, chat_id, message)

        return web.Response(
            text='Р”Р°РЅРЅС‹Рµ СѓСЃРїРµС€РЅРѕ РїРѕР»СѓС‡РµРЅС‹ Рё РѕС‚РїСЂР°РІР»РµРЅС‹ РІ Telegram',
            headers={'Access-Control-Allow-Origin': '*'}
        )
    else:
        return web.Response(
            text='РќРµРєРѕСЂСЂРµРєС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ',
            headers={'Access-Control-Allow-Origin': '*'}
        )

async def handle_options(request):
    print('test')
    return web.Response(
        headers={
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, ngrok-skip-browser-warning',
            'Access-Control-Allow-Credentials': 'true',
        }
    )

def send_message(bot_token, chat_id, message):
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    params = {
        'chat_id': chat_id,
        'text': message
    }
    requests.post(url, params=params)

app = web.Application()
app.router.add_route('POST', '/submit', handle)
app.router.add_route('OPTIONS', '/submit', handle_options)

if __name__ == '__main__':
    print('start')
    web.run_app(app, port=8080)
    print('success')
