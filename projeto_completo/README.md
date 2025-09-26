# GPT-5 PRO Landing Page

Uma landing page moderna e futurística para o GPT-5 PRO com design dark mode, efeitos neon e animações.

## 🚀 Características

- **Design Futurístico**: Tema dark com efeitos neon verde (#00ff88)
- **Vídeo Wistia Integrado**: Player de vídeo profissional 
- **Notificações em Tempo Real**: Simulação de vendas com animações
- **Carrossel de Depoimentos**: Navegação automática e manual
- **FAQ Interativo**: Perguntas expansíveis com animações
- **Partículas Animadas**: Background com efeitos flutuantes
- **Responsivo**: Adaptável para desktop e mobile

## 🛠️ Tecnologias

### Frontend
- React 18
- Tailwind CSS
- Lucide React (ícones)
- Axios
- React Router DOM

### Backend
- FastAPI
- MongoDB (Motor)
- Python-dotenv
- Uvicorn

## 📦 Instalação

### Frontend
```bash
cd frontend
yarn install
yarn start
```

### Backend
```bash
cd backend
pip install -r requirements.txt
python server.py
```

## 🎨 Design

O site utiliza um design futurístico baseado em:
- **Fundo**: Preto (#0a0a0a)
- **Accent**: Verde neon (#00ff88) 
- **Cards**: Fundo semi-transparente com blur
- **Bordas**: Verde neon com glow effects
- **Animações**: Partículas flutuantes, hover effects, transições suaves

## 📱 Seções

1. **Header**: Banner de desconto com destaque neon
2. **Hero**: Título principal com vídeo
3. **Problemas**: Lista de frustrações do usuário
4. **Benefícios**: 4 cards com ícones e descrições
5. **Depoimentos**: Carrossel com imagens reais
6. **FAQ**: 6 perguntas expansíveis
7. **Notificações**: Simulação de vendas automáticas

## 🖼️ Imagens

Coloque suas imagens na pasta `frontend/public/images/`:
- `01.webp`: Pessoa frustrada (seção problemas)
- `1.webp`: Depoimento 1
- `2.webp`: Depoimento 2  
- `3.webp`: Depoimento 3
- `4.webp`: Depoimento 4

## ⚙️ Configuração

### Variáveis de Ambiente

**Frontend (.env)**
```
REACT_APP_BACKEND_URL=sua_url_do_backend
```

**Backend (.env)**
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=test_database
CORS_ORIGINS=*
```

## 🚀 Deploy

1. Configure as variáveis de ambiente de produção
2. Build do frontend: `yarn build`
3. Configure o servidor para servir os arquivos estáticos
4. Execute o backend em produção

## 📄 Licença

Este projeto foi desenvolvido para o GPT-5 PRO Landing Page.