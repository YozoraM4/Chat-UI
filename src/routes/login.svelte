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
                <Button class="m-auto"><Icon render={LogoFacebook24} class="mr-1" /> Login With Facebook</Button>
              </div>
            </Form>
          </div>
        </Column>
    </Row>
    
