export default function (name: string): string | null { // 重构getParams
    const reg: RegExp = new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)')
    const res: string[] = reg.exec(location.href) || ['', '']
    return res[1].replace(/\+/g, '%20') || null
}

