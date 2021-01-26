<script>
  export let segment = undefined;

  import {
    Content,
    Breadcrumb,
    BreadcrumbItem,
    Grid,
    Row,
    Column,
    Tabs,
    TabContent,
    Tab,
    Select,
    SelectItem,
  } from "carbon-components-svelte";
  import Header from "../components/Header.svelte";
  import Theme from "../components/Theme.svelte";
</script>

<Theme persist theme="g10">
  <Header segment="{segment}" />
  <Content class="pl-0 pr-0 pt-0 pb-0" style="min-height:95vh;">
    <Grid class="" style="min-height:95vh;">
      <slot />
    </Grid>
  </Content>
</Theme>
