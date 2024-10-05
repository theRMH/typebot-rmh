import React, { useEffect, useRef } from 'react'

export const LiteBadge = () => {
  const liteBadge = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    if (!document) return
    const container = document.querySelector(
      '[data-testid="container"]'
    ) as HTMLDivElement
    const observer = new MutationObserver(function (mutations_list) {
      mutations_list.forEach(function (mutation) {
        mutation.removedNodes.forEach(function (removed_node) {
          if ((removed_node as HTMLElement).id == 'lite-badge')
            container.append(liteBadge.current as Node)
        })
      })
    })
    observer.observe(container, {
      subtree: false,
      childList: true,
    })

    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <a
      ref={liteBadge}
      href={'https://rabbitmarketinghouse.in/wp-content/uploads/2023/04/Rabbit-Png-150x150.png'}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed py-1 px-2 bg-white z-50 rounded shadow-md lite-badge"
      style={{ bottom: '20px' }}
      id="lite-badge"
    >
      Powered by <span className="text-blue-500">RMH</span>.
    </a>
  )
}
