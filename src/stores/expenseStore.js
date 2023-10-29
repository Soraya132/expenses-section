import { defineStore } from "pinia";
import { ref,reactive } from "vue";
import {
  expencesCategory,
  ownerPickup,
  paymentSent,
  party,
  allExpences,
  paymentReceived,
  menuItems,
} from "../data";

export const useTabsStore = defineStore("tabs", {
  state: () => ({
    isMenuOpen : ref(false),
    isModalVisible : ref(false), // for the menu toggle
    selectedTab: "allExpences",
    currentTitle: "All Expenses",
    selectedRowsPerPage:10,
    originalColumns: [],
    tabsData:reactive({
      allExpences:ref(allExpences),
      paymentSent: ref(paymentSent),
      paymentReceived: ref(paymentReceived),
      ownerPickup: ref(ownerPickup),
      expencesCategory: ref(expencesCategory),
      party: ref(party),
    }) ,

  }),
  actions: {
    // for toggling menu
    toggleMenu(name) {
      if (name === "menu") {
        this.isMenuOpen = !this.isMenuOpen; // Access isMenuOpen through this
      }
    },
    setSelectedTab(tab) {
      this.selectedTab = tab;
      this.initializeColumns(); // Update originalColumns when selectedTab changes
      this.updateTitle();
      this.isMenuOpen = false; // close the menu
    },
    updateTitle() {
      const selectedItem = menuItems.find(item => item.clickFunction === this.selectedTab);
      if (selectedItem) {
        this.currentTitle = selectedItem.name;
      }
    } ,
    initializeColumns() {
      const selectedData = this.tabsData[this.selectedTab];
      if (selectedData && selectedData.length > 0) {
        // Extract keys from the first item (assuming all items have the same structure)
        this.originalColumns = Object.keys(selectedData[0]).filter((key) => key !== "id");
      } else {
        this.originalColumns = [];
      }
    },

    deleteRow(id) {
      const selectedData = this.tabsData[this.selectedTab];
      const index = selectedData.findIndex((item) => item.id === id);
      if (index !== -1) {
        selectedData.splice(index, 1);
      }
    },


  openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
    this.isModalVisible = false;
    }
  },
  getters: {
    Columns() {
      const selectedData = this.tabsData[this.selectedTab];
      if (selectedData && selectedData.length > 0) {
        //Extract keys from the first item (assuming all items have the same structure)
        return Object.keys(selectedData[0]).filter((key) => key !== "id");
      } else {
        return this.originalColumns;
      }
    },
    rowData() {
      const selectedData = this.tabsData[this.selectedTab];
      if (!selectedData || selectedData.length === 0) {
        return [];
      }
      return selectedData;
    }, 
    getIsMenuOpen() {
      return this.isMenuOpen; // Expose isMenuOpen as a getter
    },
    
  },
});
