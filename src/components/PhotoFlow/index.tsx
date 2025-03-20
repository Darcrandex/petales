/**
 * @name PhotoFlow
 * @description
 * @author darcrand
 */

'use client'
import NextImage from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { initLenis } from './animate'
import './styles.css'
import { generateGrid, loadImageAsync, shuffleArray } from './utils'

const MAX_LOAD_IMAGE_COUNT = 10
const COLUMNS = 4

export default function PhotoFlow() {
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [loaded, setLoaded] = useState(false)

  // 动态加载本地的静态图片
  // 图片需要使用 1:1 的比例
  // 尺寸大于 512x512
  useEffect(() => {
    const fn = async () => {
      const imageCount = MAX_LOAD_IMAGE_COUNT
      const tasks = Array(imageCount)
        .fill(0)
        .map(async () => {
          // const url = `/images/${i + 1}.jpg`
          const url = `/images/${1}.png`
          return loadImageAsync(url)
        })

      const images = await Promise.all(tasks)
      setImageUrls(images.filter(Boolean) as string[])
      setLoaded(true)
    }

    fn()

    return () => {
      setImageUrls([])
      setLoaded(false)
    }
  }, [])

  // 根据图片构建行列数据
  const grid: (string | null)[][] = useMemo(() => {
    if (imageUrls.length === 0) return []
    return generateGrid(COLUMNS, shuffleArray(imageUrls))
  }, [imageUrls])

  useEffect(() => {
    if (loaded) {
      initLenis()
    }
  }, [loaded])

  return (
    <>
      {grid.map((row, i) => (
        <section key={i} className='row flex'>
          {row.map((url, j) => (
            <div key={`${i}_${j}`} className='col flex-1 aspect-square overflow-hidden'>
              {url && (
                <NextImage
                  width={256}
                  height={256}
                  src={url}
                  alt=''
                  className='photo w-full h-full object-cover relative'
                />
              )}
            </div>
          ))}
        </section>
      ))}
    </>
  )
}
