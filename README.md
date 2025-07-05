# 👨‍💼 Projeto Educacional - Angular 19.2.0
----
## Cadastro de Funcionarios

Este é um projeto com fins educacionais, desenvolvido como parte do aprendizado de tecnologias modernas para web. O sistema consiste em uma API REST com backend em **.NET 8.0**, conectada a um banco de dados **SQL Server**, e consumida por uma aplicação frontend Angular.

---

## 🚀 Tecnologias Utilizadas

### 💻 Frontend (Angular 19)
- 🚀 **Angular 19.2.0**
- 📦 **@ng-bootstrap/ng-bootstrap** (componentes integrados com Bootstrap)
- 🎨 **Bootstrap 5.3.3** para estilização
- 📡 **HttpClient** para consumo da API
- 🧮 **Formulários reativos com validação**
- 🔁 **rxjs** para programação reativa
- ⏱️ **zone.js** para controle de detecção de mudanças
- 🧪 **Jasmine + Karma** para testes automatizados
  
### 🔧 Backend (.NET 8)
- ✅ **ASP.NET Core 8.0**
- 🗄️ **Entity Framework Core 8.0.10**
- 🛢️ **SQL Server**
- 🧪 **Data Annotations** para validação
- 📚 **Code First & Migrations** para gerenciamento do banco de dados
- 🌐 **API RESTful** com endpoints para CRUD de funcionários

---

## 📸 Funcionalidades

- ✅ Listagem de funcionários
- ✅ Cadastro de novo funcionário
- ✅ Edição e exclusão de registros
- ✅ Validação de formulário no frontend e backend
- ✅ Comunicação assíncrona entre Angular e a API .NET
- 🔄 Banco de dados persistente com SQL Server

---

## 🛠️ Como Executar

### Pré-requisitos
- [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads)
- (Opcional) Docker + Docker Compose

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/angular-crud-funcionarios.git

# Acesse a pasta
cd angular-crud-funcionarios

# Atualize a string de conexão no appsettings.json (se necessário)

# Rode as migrations (caso ainda não tenha o banco criado)
dotnet ef database update

# Inicie a aplicação
dotnet run
