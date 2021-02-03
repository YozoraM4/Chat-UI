	<script>
    import {
         Row, 
         Column,
         Form,
         TextInput,
         PasswordInput,
         Button,
         Icon,
        } from "carbon-components-svelte";
      import LogoFacebook24 from "carbon-icons-svelte/lib/LogoFacebook24";
      import { FacebookAuth } from '@beyonk/svelte-social-auth'
      import {tick} from 'svelte'
       async function push(location) {
    if (!location || location.length < 1 || (location.charAt(0) != '/' && location.indexOf('#/') !== 0)) {
        throw Error('Invalid parameter location')
    }
    console.log("A")
    // Execute this code when the current call stack is complete
    await tick()

    // Note: this will include scroll state in history even when restoreScrollState is false
    history.replaceState({scrollX: window.scrollX, scrollY: window.scrollY}, undefined, undefined)      
    window.location.hash = (location.charAt(0) == '#' ? '' : '#') + location
}
      async function loginUser (e) {
          console.log(e)
    const result =await fetch(`http://localhost:9191/login`, {
        body: JSON.stringify({
            userinfo: {"accessToken": e.detail.accessToken, "userId": e.detail.userId},
            username: "Kelvin",
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });
    window.location.href = "/"
    // const get = await result.json()
    // messages = messages.concat(get.chat)
};

	</script>
  
  <Row class="h-full">
    <Column sm={1} md={4} lg={10} class="slogan">
      <div class="login-slogan">
        <div>
          <img src="/cover.png" alt="Aijou" class="img-fluid slogan-img">
        </div>
        <div>
          <h3 class="mh-1">Hello Dear, <br> Aijou is connecting with Love   </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nesciunt sed, cum blanditiis iste, similique maiores autem ducimus maxime fugit ipsum doloribus illum facilis soluta assumenda excepturi dolores eos accusantium.</p>
        </div>
      </div>
    </Column>

    <Column sm={1} md={4} lg={6} class="login">
      <div class="login-form">
        <h3 class="text-center mh-2">Login</h3>
        <Form class="pw-5">
          <TextInput labelText="User name" placeholder="Enter user name..." required class="mh-1" />
          <PasswordInput
            required
            type="password"
            labelText="Password"
            placeholder="Enter password..."
            class="mh-1"
          />
          <div class="text-center">
            <p class="mh-2">------ Or ------</p>
            <FacebookAuth appId="710756949490317" on:auth-success={async e => loginUser(e)} />
            <!-- <Button class="m-auto"><Icon render={LogoFacebook24} class="mr-1" /> Login With Facebook</Button> -->
          </div>
        </Form>
      </div>
    </Column>
</Row>
