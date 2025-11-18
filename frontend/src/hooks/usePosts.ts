import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import type { Post } from '../types'
import { API_URL } from '../config/api'

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])

  const fetchPosts = useCallback(async () => {
    const { data } = await axios.get(`${API_URL}/post`)
    setPosts(data)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return { posts, fetchPosts }
}
