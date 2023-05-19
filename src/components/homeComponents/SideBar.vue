<template>
  <v-navigation-drawer theme="dark" rail permanent class="my-10 py-10">
    <v-list-item
      nav
      prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
    ></v-list-item>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        value="dashboard"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-navigation-drawer permanent class="my-10 py-10">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2"> One of three columns </v-sheet>
      </v-col>
    </v-row>
    <v-list>
      <v-list-item title="Home" value="home"></v-list-item>
      <v-list-item title="Contacts" value="contacts"></v-list-item>
      <v-list-item title="Settings" value="settings"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
