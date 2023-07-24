<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

        
        var map = L.map('map').setView([-23.67624, -46.64091], 12);

        // Criar o mapa usando um provedor de tile
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        }).addTo(map);
       

        // Criar os dois grupos de camadas para escolas e praças
        var escolasLayer = L.layerGroup();
        var pracasLayer = L.layerGroup();

        // Adicionar o controle de camadas ao mapa
        L.control.layers(null, { "Escolas": escolasLayer, "Praças": pracasLayer }).addTo(map);



        // Lista de coordenadas, nomes e imagens dos marcadores

        var coordenadas = [
            { lat: -23.67624, lng: -46.64091, nome: 'Quadra da Associação Despertar', imagem: 'https://i.imgur.com/XjlTvEP.jpg', informacoes: "quadra de futebol, basquete e volei. quadra disponivel das 10h as 19h todos so nos finais de semana", icone: 'https://api.iconify.design/iconoir/basketball-field.svg' }, 
            { lat: -23.67485, lng: -46.64909, nome: 'Escola Estadual Professora Joanna Abrahão', imagem: 'https://i.imgur.com/13aj0Gj.jpg', informacoes: "é isso ai", icone: 'https://api.iconify.design/iconoir/basketball-field.svg'},  
            { lat: -23.6668384, lng: -46.6404358, nome:'Escola Estadual Maria Augusta', imagem: 'https://i.imgur.com/13aj0Gj.jpg', informacoes: "quadra de futebol, aberta das 8h as 18:50 apenas finais de semana", icone: 'https://api.iconify.design/iconoir/basketball-field.svg'},
            { lat: -23.66161, lng: -46.66278, nome: 'Praça Comunitária Ligia Maria Salgado Nóbrega', imagem: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/regionais/upload/cidade_ademar/RC0_02_vista_aerea_geral.jpg', informacoes: "uuuuu", icone: 'https://api.iconify.design/tabler/brand-linktree.svg?color=green'},
            { lat: -23.66802, lng: -46.63537, nome: 'CEU Caminho do Mar', imagem: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/regionais/upload/jabaquara/imagens/2012_01_09_ferias_ceu_4.jpg', informacoes: "eiii", icone: 'https://api.iconify.design/iconoir/basketball-field.svg'},
            { lat: -23.67479, lng: -46.63223, nome: 'EE Doutor João Ernesto Faggin', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7EPzKxmZ42aJkpSGrrau1lCy5tvuKaOUpk9jtWKxAZeXEoaZnPuCLTLlNGVrchUDxPQ&usqp=CAU', informacoes: "iiiiiii", icone: 'https://api.iconify.design/iconoir/basketball-field.svg'},
            { lat: -23.68058, lng: -46.63618, nome: 'Escola Estadual Yolanda Bernardini Robert', imagem:'https://f.i.uol.com.br/fotografia/2022/03/30/16486815596244e257452ff_1648681559_3x2_rt.jpg', informacoes: "wndy lee", icone: 'https://api.iconify.design/iconoir/basketball-field.svg'},
            { lat: -23.68097, lng: -46.63677, nome: 'Leonor Quadros', imagem: 'https://veja.abril.com.br/wp-content/uploads/2016/06/alx_ee_estupro_original.jpeg?quality=90&strip=info&w=1025&h=519&crop=1', informacoes: "rafa", icone: 'https://api.iconify.design/iconoir/basketball-field.svg'},
            { lat: -23.68412, lng: -46.65077, nome: 'IDB - Castelinho Dom Bosco', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlXsAYJLZbSxsotiM_ihcjmZWYIFF7RtSV522LLqfyBx2a0ACfBz7Rjg_7nF5g29cncY&usqp=CAU', informacoes: "gabriel", icone: 'https://api.iconify.design/material-symbols/menu-book-outline-rounded.svg?color=red'},
            { lat: -23.65287, lng: -46.67822, nome: 'Praça Carlos Baptista de Magalhães', imagem:'https://lh3.googleusercontent.com/p/AF1QipOOxcwoog4a-KKXRLUxOOoo_KDZ70kW3P7sARwb=s1360-w1360-h1020', informacoes: "jp ee", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.66694, lng: -46.65319, nome: 'Praça', imagem:'https://lh3.googleusercontent.com/p/AF1QipMYECBpRiVZ6_A_wIBz1VIGnD3ZKJ19MOZIgWKa=s1360-w1360-h1020', informacoes: "jp lindo", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.65053, lng: -46.67363, nome: 'Praça escondida', imagem:'https://imgur.com/a/Dx3PLDd', informacoes: "jp m", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.65287, lng: -46.67822, nome: 'Praça Carlos Baptista de Magalhães', imagem:'https://lh3.googleusercontent.com/p/AF1QipOOxcwoog4a-KKXRLUxOOoo_KDZ70kW3P7sARwb=s1360-w1360-h1020', informacoes: "jp ee", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.66161, lng: -46.66278, nome: 'Praça Comunitária Ligia Maria Salgado Nóbrega', imagem: 'https://editorajuma.com.br/wp-content/uploads/Praca-Comunitaria-Ligia.jpg', informacoes: "jp lele", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.67434, lng: -46.66227, nome: 'Praça Joaniza',imagem:'https://lh3.googleusercontent.com/p/AF1QipMYECBpRiVZ6_A_wIBz1VIGnD3ZKJ19MOZIgWKa=s1360-w1360-h1020', informacoes: "jp lele", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.66694, lng: -46.65709, nome: 'Praça Manoel Branco Miranda', imagem:'https://lh3.googleusercontent.com/p/AF1QipMYECBpRiVZ6_A_wIBz1VIGnD3ZKJ19MOZIgWKa=s1360-w1360-h1020', informacoes: "jp lele", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.67845, lng:-46.63471, nome:  'Rua Sebastião Afonso', imagem:'https://lh3.googleusercontent.com/p/AF1QipMYECBpRiVZ6_A_wIBz1VIGnD3ZKJ19MOZIgWKa=s1360-w1360-h1020', informacoes: "jp lele", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.66965, lng: -46.64041, nome: 'R. Monte Real, 196', imagem:'https://lh3.googleusercontent.com/p/AF1QipMYECBpRiVZ6_A_wIBz1VIGnD3ZKJ19MOZIgWKa=s1360-w1360-h1020',  informacoes: "jp lele", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.66988, lng:-46.64178, nome:  'Tv. Fluorita, 14',imagem:'https://lh3.googleusercontent.com/p/AF1QipMYECBpRiVZ6_A_wIBz1VIGnD3ZKJ19MOZIgWKa=s1360-w1360-h1020',  informacoes: "jp lele", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.66716, lng: -46.67572, nome: 'Praça Zavuvus', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2MFcSgq6vqEfetqw-OtU3lIWaAxCrkk6ivXobxoknnBBmAMappowCJYUtaiJSVN731c&usqp=CAU', informacoes: "oi", icone: 'https://imgur.com/Dzt5maw.png'},
            { lat: -23.66265, lng: -46.66015, nome: 'Paarque Nabuco', imagem: 'https://1.bp.blogspot.com/-4JVj6E3Ud6s/VdIydsO4KRI/AAAAAAAAzRM/VUpBIBNVuhc/s1600/DSC06793.jpg', informacoes: "ouu"},
            { lat: -23.69502, lng:  -46.6433,  nome: 'Parque Sete Campos', imagem: 'https://payload.cargocollective.com/1/3/112332/2266864/foto-03_590.jpg', informacoes: "tttt"}, 
            { lat: -23.66802, lng: -46.63537, nome: 'CEU Caminho do Mar', imagem: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/regionais/upload/jabaquara/imagens/2012_01_09_ferias_ceu_4.jpg', informacoes: "eiii", icone: ''},
            { lat: -23.67479, lng: -46.63223, nome: 'EE Doutor João Ernesto Faggin', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7EPzKxmZ42aJkpSGrrau1lCy5tvuKaOUpk9jtWKxAZeXEoaZnPuCLTLlNGVrchUDxPQ&usqp=CAU', informacoes: "iiiiiii"},
            { lat: -23.68058, lng: -46.63618, nome: 'Escola Estadual Yolanda Bernardini Robert', imagem:'https://f.i.uol.com.br/fotografia/2022/03/30/16486815596244e257452ff_1648681559_3x2_rt.jpg', informacoes: "wndy lee"},
            { lat: -23.68097, lng: -46.63677, nome: 'Leonor Quadros', imagem: 'https://veja.abril.com.br/wp-content/uploads/2016/06/alx_ee_estupro_original.jpeg?quality=90&strip=info&w=1025&h=519&crop=1', informacoes: "rafa"},
            { lat: -23.67654, lng: -46.64079, nome: 'Associação Comunitária Despertar', imagem:'https://images.app.goo.gl/YSzvNaBNB87BXnBCA', informacoes: "gabriel"},
            { lat: -23.66591, lng: -46.64916, nome: 'Aldeia do Futuro', imagem:'https://editorajuma.com.br/wp-content/uploads/Aldeia-do-Futuro.jpg', informacoes: "gabriel"},
            { lat: -23.68412, lng: -46.65077, nome: 'IDB - Castelinho Dom Bosco', imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlXsAYJLZbSxsotiM_ihcjmZWYIFF7RtSV522LLqfyBx2a0ACfBz7Rjg_7nF5g29cncY&usqp=CAU', informacoes: "gabriel"},
            { lat: -23.68202, lng: -46.63606, nome: 'INSTIT. ENTIDADE DE PROMOCAO E ASSISTENCIA SOCIAL ESPACO ABERTO', imagem:'https://images.app.goo.gl/vUC2bqDmgR99r6Q18', informacoes: "gabriel"},
            { lat: -23.66375, lng: -23.66375, nome: 'Instituto Salve Quebrada', imagem:'https://images.app.goo.gl/7nFDLEauThTGrcpJA', informacoes: "gabriel"},
            { lat:-23.68172 , lng: -46.66363, nome: 'Associação Comunitária Jardim São Jorge Adjacência', imagem:'https://lh3.googleusercontent.com/p/AF1QipMYECBpRiVZ6_A_wIBz1VIGnD3ZKJ19MOZIgWKa=s1360-w1360-h1020',  informacoes: "gabriel"},
            { lat:-23.68199 , lng: -46.63557, nome: 'Rua Diogo Arias', imagem:'https://lh3.googleusercontent.com/p/AF1QipMYECBpRiVZ6_A_wIBz1VIGnD3ZKJ19MOZIgWKa=s1360-w1360-h1020',  informacoes: "gabriel"},
            { lat: -23.67249, lng: -46.64241, nome: 'Rua Florinda Mouzo Bermudez', imagem:'https://lh3.googleusercontent.com/p/AF1QipMYECBpRiVZ6_A_wIBz1VIGnD3ZKJ19MOZIgWKa=s1360-w1360-h1020', informacoes: "gabriel"},
            { lat:-23.67725 , lng: -46.66305, nome: 'SASF I - CIDADE ADEMAR', imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWN07q6We9cihTlkxNGymRF-jOEohR5ZWDxBwQFWB2D6f4ZIe6LvD0upDxPef7loyUcYo&usqp=CAU', informacoes: "gabriel"},
            { lat:-23.69211 , lng: -46.64032, nome: 'Sasf ll Cidade Ademar - Creser', imagem:'https://images.app.goo.gl/h5aUemLc44XVbbTz9', informacoes: "gabriel"},
            { lat: -23.66591, lng: -46.64916, nome: 'Aldeia do Futuro', imagem:'https://editorajuma.com.br/wp-content/uploads/Aldeia-do-Futuro.jpg', informacoes: "gabriel"},
            { lat: -23.67897, lng: -46.65017, nome: 'Campo de Futebol do BDS', imagem:'https://lh3.googleusercontent.com/p/AF1QipOR9m3deRXe9OMFZ3NU2mr7gceqSc6O9SNr0PGp=s1360-w1360-h1020', informacoes: "gabriel", icone:'https://api.iconify.design/iconoir/basketball-field.svg'},
            { lat:-23.6553 , lng: -46.67411, nome: 'Cdc Cidade Ademar', imagem:'https://lh3.googleusercontent.com/p/AF1QipOKz98ZOrAfojJUARJ8hTsiYD_aApsdQ5tA2Khw=s1360-w1360-h1020', informacoes: "gabriel", icone:'https://api.iconify.design/iconoir/basketball-field.svg'},
            { lat:-23.65883 , lng:-46.65971, nome: 'CDC FERRADURA', imagem:'https://lh3.googleusercontent.com/p/AF1QipOKc8hIHpMd2j3VAh2O9h4IeaTd1qqx1r-2JPrk=s1360-w1360-h1020', informacoes: "gabriel", icone:'https://api.iconify.design/iconoir/basketball-field.svg'},
            { lat:-23.66287 , lng: -46.67023, nome: 'H&M Arena de Esportes', imagem:'https://lh3.googleusercontent.com/p/AF1QipMgf9xHb4JdtkfeCEz72nOA2XkVRAQbLhy2_m1-=s1360-w1360-h1020', informacoes: "gabriel", icone:'https://api.iconify.design/iconoir/basketball-field.svg'},
            { lat:-23.67219 , lng:-46.63644 , nome: 'Futebol Alegria', imagem:'https://lh3.googleusercontent.com/p/AF1QipNXEOTSf94itVPtGw7BJwjxf5HHY9Yi4foQJ83n=s1360-w1360-h1020', informacoes: "gabriel", icone:'https://api.iconify.design/iconoir/basketball-field.svg'},
        ];

        // Adicionar marcadores no mapa com nomes e imagens
        coordenadas.forEach(function(coord) {
            var icon = L.icon({
                iconUrl: coord.icone,
                iconSize: [30, 30],
                popupAnchor: [0, -20]
            });

            var marker = L.marker([coord.lat, coord.lng], { icon: icon }).addTo(map);
            marker.bindPopup(coord.nome);


            // Evento de clique no marcador
            marker.on('click', function() {
                var imagemOverlay = document.getElementById('imagem-overlay');
                var imagem = document.getElementById('imagem');
                var informacoes = document.getElementById("p");
                imagem.src = coord.imagem;
                informacoes.textContent = coord.informacoes;
                imagemOverlay.style.display = 'block';
            });
        });

        map.on('click', function(event) {
            var imagemOverlay = document.getElementById('imagem-overlay');
            if (event.originalEvent.target.id !== 'imagem-overlay') {
                imagemOverlay.style.display = 'none';
            }
        });
        
        const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfe2;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
  </style>
  <footer>
    <ul>
      <li><a href="about.html">About</a></li>
      <li><a href="work.html">Work</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <ul class="social-row">
      <li><a href="https://github.com/my-github-profile"><i class="fab fa-github"></i></a></li>
      <li><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="fab fa-linkedin"></i></a></li>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
