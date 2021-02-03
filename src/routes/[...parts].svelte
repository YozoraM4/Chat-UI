<script context="module">

export async function preload({ params }) {
  const	  slug  = params
  console.log(slug);
  return {slug }
	}
</script>


<script>
  import {
    Row,
    Column,
    TextInput,
    ClickableTile,
    OverflowMenu,
    OverflowMenuItem,
  } from "carbon-components-svelte";
  import VideoFilled20 from "carbon-icons-svelte/lib/VideoFilled20";
  import PhoneFilled20 from "carbon-icons-svelte/lib/PhoneFilled20";
  import InformationFilled20 from "carbon-icons-svelte/lib/InformationFilled20";
  import Add20 from "carbon-icons-svelte/lib/Add20";
  import SendAltFilled20 from "carbon-icons-svelte/lib/SendAltFilled20";
  import { getContext } from "svelte";

  const { carbon_theme } = getContext("Theme");
  import { get } from 'svelte/store'
  import {onMount} from "svelte";
let messages = [];
let inputValue = "";
export let slug;


async function handleSendMessage () {
  
    const result =await fetch(`http://localhost:9191/chat/${slug.parts}`, {
        body: JSON.stringify({
            message: inputValue,
            username: "Kelvin",
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });
    inputValue="";
    // const get = await result.json()
    // messages = messages.concat(get.chat)
};

onMount(async () => {
  if (typeof window !== 'undefined') {
 
    messages = getMessages()
//     const store = createChannelStore();
//     store.subscribe(incomingMessages => {
//       console.log(incomingMessages)
//       messages = await messages.concat(incomingMessages);
//     });
//     // return store.close;
//   });
const eventSource = new EventSource(
 
    `http://localhost:9191/chatUpdate/${slug.parts}`
  );

  eventSource.onmessage = (e) => {
    console.log(e)
    messages= messages.concat(JSON.parse(e.data));
  };
}
})

async function getMessages() {
  console.log(slug)
  const result = await fetch (`http://localhost:9191/chat/${slug.parts}`)

const gets = await result.json();
messages = gets.chat;
console.log(messages)
}

</script>

  <Row class="p-0">
    <Column 
    sm={0}
    md={2}
    lg={4} class="chat-list">
    <div>
      <h3>Chats</h3>
    </div>   
    <div class="list-scroll">
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Yozora
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Simbad
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Kaguya
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Ishigami-kun
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Natsuki Subaru
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Emillia
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Rem
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Monkey D Luffy
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Yozora
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Yozora
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Simbad
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Kaguya
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Ishigami-kun
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Natsuki Subaru
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Emillia
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Rem
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Monkey D Luffy
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
      <ClickableTile href="" class="chats">
        <Row class="">
          <Column class="d-inlineflex">
            <img src="/default.png" alt="" class="img-fluid chat-img">
            <div class="mh-auto">
              <span>
                Yozora
              </span>
              <br>  
              <span class="t-overflow">Konnichiwa Aino-san blah blah blah blah</span>
            </div>
          </Column>
          <Column lg={1} class="m-auto text-right">
            <OverflowMenu class="send-btn" flipped>
              <OverflowMenuItem text="Mute" />
              <OverflowMenuItem text="Block" />
              <OverflowMenuItem danger text="Delete" />
            </OverflowMenu>
          </Column>
        </Row>
      </ClickableTile>
    </div>
    </Column>

    <Column class="box-shadow"
    sm={16}
    md={4}
    lg={8}>
      <Row class="b-bottom">
        <Column class="d-inlineflex">
          <img src="/default.png" alt="" class="img-fluid chat-img">
          <div class="mh-auto">
            <p>Aino Yukimura</p>
          </div>
        </Column>
        <Column class="m-auto text-right">
          <span class="chat-icon">
            <VideoFilled20 />
          </span>
          <span class="chat-icon">
            <PhoneFilled20 />
          </span>
          <span class="chat-icon">
            <InformationFilled20 />
          </span>
        </Column>
      </Row>
     
      {#await messages}
      <progress class="progress is-small is-primary" max="100">15%</progress>
        {:then list}
        <div class="p-1 chat-content">
        
        {#each list as message}
        
          <div class="right-msg f-right">
          <p>{message.message}</p>
          </div>
        
        {/each}
        </div>
  
        {:catch error}
        <p style="color: red">{error.message}</p>
        {/await}
        
        
      <Row>
        <Column sm={1} md={1} lg={1} class="m-auto text-center">
          <button class="send-btn"><Add20/></button>
        </Column>
        <Column  sm={2} md={6} lg={14}>
          <TextInput bind:value={inputValue} ref="text" size="xl" placeholder="Aa..." class="" />
        </Column>
        <Column sm={1} md={1} lg={1} class="m-auto text-center pl-0">
            <button on:click={handleSendMessage} class="send-btn"><SendAltFilled20/> </button>
        </Column>
      </Row>
    </Column>

    <Column
    sm={0}
    md={2}
    lg={4}>
      <p>etc</p>
     
    </Column>
  </Row>