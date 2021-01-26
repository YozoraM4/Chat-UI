<script>
  import {
    Header,
    HeaderUtilities,
    HeaderNav,
    HeaderGlobalAction,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import Notification20 from "carbon-icons-svelte/lib/Notification20";
  let isSideNavOpen = true;
</script>

<Header company="" platformName="" bind:isSideNavOpen>
  <img src="/cover.png" alt="Logo" class="img-fluid logo-size mw-1">
  <div slot="skip-to-content">
    <SkipToContent />
  </div>

  <HeaderUtilities>
    <HeaderNav class="w-full f-right head-nav">
      <HeaderGlobalAction aria-label="Notification" icon={Notification20} />
      <!-- <img src="/profile.png" alt="" class="img-fluid"> -->
      <HeaderNavMenu text="Menu">
        <HeaderNavItem href="/" text="Profile" />
        <HeaderNavItem href="/" text="setting" />
        <HeaderNavItem href="/" text="Logout"/>
      </HeaderNavMenu>
    </HeaderNav>
  </HeaderUtilities>

  
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink text="Notification" />
    <SideNavMenu text="Menu">
      <SideNavMenuItem href="/" text="Profile" />
      <SideNavMenuItem href="/" text="Setting" />
      <SideNavMenuItem href="/" text="Logouts" />
    </SideNavMenu>
  </SideNavItems>
</SideNav>

<!-- <Content>
  <Grid>
    <Row>
      <Column>
        
      </Column>
    </Row>
  </Grid>
</Content> -->
