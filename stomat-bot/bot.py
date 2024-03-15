import aiohttp
from aiohttp import web
import asyncio
import requests
import ssl
async def handle(request):
    data = await request.json()
    phone = data.get('Телефон', '')
    name = data.get('Имя', '')
    print(f'Received data from frontend: Телефон - {phone}, Имя - {name}')
    if phone and name:

        bot_token = ''
        chat_id = ''
        message = f'Новые данные: Телефон - {phone}, Имя - {name}'
        send_message(bot_token, chat_id, message)

        return web.Response(
            text='Данные успешно получены и отправлены в Telegram',
            headers={'Access-Control-Allow-Origin': 'https://stomatologiya-1.ru/'}
        )
    else:
        return web.Response(
            text='Некорректные данные',
            headers={'Access-Control-Allow-Origin': 'https://stomatologiya-1.ru/'}
        )

async def handle_options(request):
    return web.Response(
        headers={
            'Access-Control-Allow-Origin': 'https://stomatologiya-1.ru/',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
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
    web.run_app(app, port=8080)
