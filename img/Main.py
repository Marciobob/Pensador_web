import requests

import time

import json


class TelegramBot:
	
    def __init__(self):
    	
        token = '878564675:AAG1Go8hy13eNTq7bKPPifAJNsPf_iEfCCc'

        self.url = f'https://api.telegram.org/bot{token}/'
        

    def iniciar(self):
        update_id = None

        global resposta1
        resposta1 = ' '
      
        while True:
        	
            atualizacao = self.pega_msg(update_id)
            
            mensagens = atualizacao['result']
            
            if mensagens:
            	for mensagem in mensagens:
            		
            		if 'my_chat_member' in mensagem:
            		
            			print("iihhuuuuu",mensagem)
            			
            		else:
            			
            			update_id = mensagem['update_id']
            			
            			chat_id = mensagem['message']['chat']['id']
            			
            			nome_user = mensagem['message']['from']['first_name']
            			print("else",chat_id,update_id,nome_user)
            			
            			resposta = self.cria_respostas(mensagem,resposta1,update_id,chat_id,nome_user)
            			
            			resposta1 = resposta
            			
            			self.responder(resposta, chat_id)


    def pega_msg(self, update_id):
        link_requisicao = f'{self.url}getUpdates?timeout=100'
        if update_id:
            link_requisicao = f'{link_requisicao}&offset={update_id + 1}'

        resultado = requests.get(link_requisicao)

        return json.loads(resultado.content)

    def cria_respostas(self,mensagem,resposta1,update_id,chat_id,nome_user):
    	
       mensagem_txt = mensagem['message']['text']
       print("MENSAGE: ",mensagem_txt,mensagem,bot)
       
       ur = f'{self.url}messages.deleteChatUser?chat_id={chat_id}'
       
       resultado=requests.get(ur)
       
       print(json.loads(resultado.content))
       
       return f"Tudo ok {nome_user}"
       


    def responder(self, resposta, chat_id):
        link_envio = f'{self.url}sendMessage?chat_id={chat_id}&text={resposta}'
        requests.get(link_envio)

    

bot = TelegramBot()
bot.iniciar()
