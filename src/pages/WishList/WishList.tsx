import React, { useEffect, useRef, useState } from 'react'
import './WishList.scss'
import { WishItem } from '../../types'


function WishList() {

    const [wishList, setWishList] = useState<WishItem[] | []>([])
    const [totalItems, setTotalItems] = useState<number>(wishList.length)

    useEffect(() => {
        //@ts-ignore
        setWishList(JSON.parse(localStorage.getItem('todoWishList')) || [])
    }, [])

    const input = useRef(null)

    const addItem = (id: number, completed: boolean) => {
        //@ts-ignore
        const currentInput = input.current as HTMLInputElement

        if (currentInput.value === '') {
            return
        }

        localStorage.clear()
        const newWishList = [...wishList, { id, title: currentInput.value, completed }]
        localStorage.setItem("todoWishList", JSON.stringify(newWishList))
        currentInput!.value = ''
        setWishList(newWishList)
        setTotalItems(prev => prev + 1)
    }

    const deleteItem = (id: number) => {
        localStorage.clear()
        const newWishList = wishList.filter((item: WishItem) => {
            return id !== item.id
        })
        localStorage.setItem('todoWishList', JSON.stringify(newWishList))
        setWishList(newWishList)
    }

    const toggleCompleteItem = (id: number) => {
        localStorage.clear()
        const copyWishList = wishList
        const currentItemIndex = copyWishList.findIndex((item: WishItem) => {
            return item.id === id
        })
        copyWishList[currentItemIndex].completed = !copyWishList[currentItemIndex].completed
        localStorage.setItem('todoWishList', JSON.stringify(copyWishList))
        setWishList(prev => copyWishList)
        setTotalItems(totalItems + 1)
    }

    return (
        <>
            <div className='wishlist__wrapper'>
                <div className='wishlist__header'>
                    <input type="text" ref={input} />
                    <button className='wishlist__add' onClick={() => addItem(totalItems + 1, false)}>add</button>
                </div>
                <div className="wishlist__items">
                    {
                        wishList.length ? (
                            //@ts-ignore
                            wishList.map((item: WishItem, ind: number) => {
                                return (
                                    <div className="wishlist__item" key={item.title + ind}>
                                        <input type="checkbox" onClick={() => toggleCompleteItem(item.id)} checked={item.completed === true} />
                                        <p className={item.completed === true ? 'done' : ''}>{item.title}</p> <span onClick={() => deleteItem(item.id)}>delete</span>
                                    </div>
                                )
                            })
                        ) : (
                            <h1>List is empty!</h1>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default WishList