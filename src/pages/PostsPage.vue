<template>
    <h1>Page with posts</h1>
    <my-input v-model="searchQuery" placeholder="Title search..."></my-input>
    <my-button @click="showDialog">Create new post</my-button>
    <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    <my-dialog v-model:show="isDialogVisible">
      <PostForm @create="createPost" />
    </my-dialog>
    <PostsList :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Data is loading...</div>
    <!-- <div class="page__wrapper">
      <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{
        'current-page': currentPage === pageNumber
      }" @click="changePage(pageNumber)">{{ pageNumber }}</div>
    </div> -->
    <div class="observer" ref="observer"></div>
  </template>
  
  <script>
  import PostForm from '@/components/PostForm.vue';
  import PostsList from '@/components/PostsList.vue';
  import axios from 'axios';
  
  export default {
    components: {
      PostForm, PostsList
    },
    data() {
      return {
        posts: [],
        isDialogVisible: false,
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        currentPage: 1,
        limitPerPage: 10,
        totalPages: 0,
        sortOptions: [
          { value: 'title', name: 'Sort by name' },
          { value: 'body', name: 'Sort by content' }
        ]
      }
    },
    methods: {
      createPost(post) {
        if (post.title && post.body) {
          this.posts.push(post)
          this.isDialogVisible = false
        }
      },
      removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
      },
      showDialog() {
        this.isDialogVisible = true
      },
      // changePage(pageNumber) {
      //   this.currentPage = pageNumber
      // },
      async fetchPosts() {
        try {
          this.isPostsLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.currentPage,
              _limit: this.limitPerPage,
            }
          })
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limitPerPage)
          this.posts = await response.data
        } catch (e) {
          alert(`Error: ${e}`)
        } finally {
          this.isPostsLoading = false
        }
      },
      async loadMorePosts() {
        try {
          this.currentPage += 1
          // this.isPostsLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.currentPage,
              _limit: this.limitPerPage,
            }
          })
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limitPerPage)
          this.posts = [...this.posts, ...response.data]
        } catch (e) {
          alert(`Error: ${e}`)
        } finally {
          // this.isPostsLoading = false
        }
      }
    },
    mounted() {
      this.fetchPosts()
      const options = {
        rootMargin: '0px',
        threshold: 1.0
      }
      const callback = (entries) => {
        if (entries[0].isIntersecting && this.currentPage < this.totalPages) {
          this.loadMorePosts()
        }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer)
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => {
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        })
      },
      sortedAndSearchedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
    },
    // watch: {
    //   currentPage() {
    //     this.fetchPosts()
    //   }
    // }
  }
  </script>
  
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .page__wrapper {
    display: flex;
    margin-top: 20px;
  }
  
  .page {
    border: 1px solid teal;
    padding: 10px;
    cursor: pointer;
  }
  
  .current-page {
    background: teal;
    color: #ffffff;
  }
  
  .observer {
    height: 20px;
    width: 100%;
    background: teal;
  }
  </style>
  