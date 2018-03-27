<template>
    <div>
        <h1 class="title">
            COMPONENTS
        </h1>
        <h2 class="subtitle">
            Components Section
        </h2>
        <div :class="['network',online ? 'online' : 'offline']">
            <div class="circle"></div>
            {{ online ? 'online' : 'offline' }}
        </div>
        <div>
            <nuxt-link to="/">Home</nuxt-link>
            <h1>Actions</h1>
            <ul>
                <li>
                    <p>Auth</p>
                    <auth/>
                </li>
                <li>
                    <p>Create</p>
                    <create/>
                </li>
                <li>
                    <p>Edit</p>
                    <edit/>
                </li>
                <li>
                    <p>Help</p>
                    <help/>
                </li>
                <li>
                    <p>Ratings</p>
                    <ratings/>
                </li>
            </ul>
            <h1>Communications</h1>
            <ul>
                <li>
                    <p>Messages</p>
                    <messages/>
                </li>
                <li>
                    <p>Messages-mini</p>
                    <messages-mini/>
                </li>
                <li>
                    <p>Notify</p>
                    <notify/>
                </li>
                <li>
                    <p>Updates</p>
                    <updates/>
                </li>
                <li>
                    <p>Updates-mini</p>
                    <updates-mini/>
                </li>
            </ul>
            <h1>Display</h1>
            <ul>
                <li>
                    <p>Calendar</p>
                    <calendar/>
                </li>
                <li>
                    <p>Cart</p>
                    <cart/>
                </li>
                <li>
                    <p>sForm</p>
                    <sform/>
                </li>
                <li>
                    <p>Item</p>
                    <item/>
                </li>
                <li>
                    <p>List</p>
                    <list/>
                </li>
                <li>
                    <p>Player</p>
                    <player/>
                </li>
                <li>
                    <p>Todo</p>
                    <todo/>
                </li>
            </ul>
            <h1>Navigation</h1>
            <ul>
                <li>
                    <p>Nav</p>
                    <navigate/>
                </li>
                <li>
                    <p>Actions</p>
                    <actions/>
                </li>
                <li>
                    <p>Search</p>
                    <search/>
                </li>
            </ul>
            <h1>Utilities</h1>
            <ul>
                <li>
                    <p>Filters</p>
                    <filters/>
                </li>
                <li>
                    <p>Logo</p>
                    <logo/>
                </li>
                <li>
                    <p>Test</p>
                    <test/>
                </li>
                <li>
                    <p>Upload</p>
                    <upload/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import Auth from '../../components/actions/Auth.vue'
  import Create from '../../components/actions/Create.vue'
  import Edit from '../../components/actions/Edit.vue'
  import Help from '../../components/actions/Help.vue'
  import Ratings from '../../components/actions/Ratings.vue'
  
  import Messages from '../../components/coms/Messages.vue'
  import MessagesMini from '../../components/coms/Messages-mini.vue'
  import Notify from '../../components/coms/Notify.vue'
  import Updates from '../../components/coms/Updates.vue'
  import UpdatesMini from '../../components/coms/Updates-mini.vue'
  
  import Calendar from '../../components/display/Calendar.vue'
  import Cart from '../../components/display/Cart.vue'
  import Sform from '../../components/display/Sform.vue'
  import Item from '../../components/display/Item.vue'
  import List from '../../components/display/List.vue'
  import Player from '../../components/display/Player.vue'
  import Todo from '../../components/display/Todo.vue'
  
  import Actions from '../../components/nav/Actions.vue'
  import Navigate from '../../components/nav/Nav.vue'
  import Search from '../../components/nav/Search.vue'
  
  import Filters from '../../components/util/Filters.vue'
  import Logo from '../../components/util/Logo.vue'
  import Test from '../../components/util/Test.vue'
  import Upload from '../../components/util/Upload.vue'

  export default {
    components: {
      Auth,
      Create,
      Edit,
      Help,
      Ratings,
      Messages,
      MessagesMini,
      Notify,
      Updates,
      UpdatesMini,
      Calendar,
      Cart,
      Sform,
      Item,
      List,
      Player,
      Todo,
      Actions,
      Navigate,
      Search,
      Filters,
      Logo,
      Test,
      Upload
    },
    data () {
      return {
        online: true
      }
    },
    computed: {},
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({type}) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>
