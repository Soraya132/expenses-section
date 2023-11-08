import { defineStore } from "pinia";
import { ref} from "vue";
export const useTabsStore = defineStore("tabs", {
  state: () => ({
    isMenuOpen : ref(false),
    isSubMenuOpen :ref(false),
    isModalVisible : ref(false), // for the menu toggle
    selectedRowsPerPage:10,
  }),
  actions: {
    // for toggling menu
    toggleMenu(name) {
      if (name === "menu") {
        this.isMenuOpen = !this.isMenuOpen; // Access isMenuOpen through this
        this.isSubMenuOpen = false
      }
    },
    showSubMenuList(){
      this.isSubMenuOpen = !this.isSubMenuOpen
    },
  openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
    this.isModalVisible = false;
    }
  },
  getters: {
    getIsMenuOpen() {
      return this.isMenuOpen; // Expose isMenuOpen as a getter
    },
    getIsSubMenuOpen() {
      return this.isSubMenuOpen; // Expose isSubMenuOpen as a getter
    },
  },
});
