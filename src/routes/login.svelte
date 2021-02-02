<FacebookAuth appId="710756949490317" on:auth-success={async e => loginUser(e)} />
	
	<script>
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
  