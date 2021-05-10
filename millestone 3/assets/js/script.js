const app = new Vue({

  el:'#app',
  data:{
    now:dayjs().format('dddd MM MMMM YYYY HH:mm:ss') ,
    nowTxt:dayjs().format('MM/MM/YYYY HH:mm:ss') ,
    utenteSelezionato: 0,
    
    name:'Giuseppe Napoli',
    avatar: '_giuseppe',
    testo:'',
    risposta: ['ok','ciao','va bene', 'come stai?','tutto bene?', 'che mi racconti?'],
  
      contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ]
  },

  methods:{
    //funzione che mi restituisce l'immagine
    getImage(index){
      return `assets/img/avatar${this.contacts[index].avatar}.jpg`;
    },

    addMsg() {
      this.contacts[this.utenteSelezionato].messages.push(
        {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text: this.testo,
          status: 'sent'
        }
      );
      this.testo = '';
      setTimeout(() => {
        this.contacts[this.utenteSelezionato].messages.push(
          {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            text: this.risposta[Math.floor(Math.random()*this.risposta.length)],
            status: 'received'
          }
        );
      }, 1000);
    },
  },
  
  mounted(){
    setTimeout(()=>{
      this.now = dayjs().format('dddd MM MMMM YYYY HH:mm:ss')
    },1000)
  }
})