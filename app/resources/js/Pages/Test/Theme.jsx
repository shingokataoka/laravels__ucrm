// 自作した「デフォルトtheme返す関数」と「囲むとデフォルトthemeカラーになるコンポーネント」をインポート
import { defaultTheme, DefaultThemeProvider } from "@/Components/defaultThemeProvider"

// MUIのButtonコンポーネントをインポート。
// MUIのコンポーネントが自作デフォルトthemeの色になるかテストするため
import { Button } from "@mui/material"


export default function Theme() {
    // 自作デフォルトtheme（darkか自動判別）を取得
    const palette = defaultTheme().palette

    return (<>
        <DefaultThemeProvider>
            {/* 背景色の未設定（つまり背景色がbackground.defaultになる） */}
            <div>background.default</div>

            {/* 背景色をbg.color1〜5の設定例 */}
            <div style={{ background: palette.bg.color1 }}>bg.color1</div>
            <div style={{ background: palette.bg.color2 }}>bg.color2</div>
            <div style={{ background: palette.bg.color3 }}>bg.color3</div>
            <div style={{ background: palette.bg.color4 }}>bg.color4</div>
            <div style={{ background: palette.bg.color5 }}>bg.color5</div>

            {/* MuiコンポーネントであるButtonにprimary〜successのカラー設定例 */}
            <Button variant="contained" color="primary">primary</Button>
            <Button variant="contained" color="secondary">secondary</Button>
            <Button variant="contained" color="error">error</Button>
            <Button variant="contained" color="warning">warning</Button>
            <Button variant="contained" color="info">info</Button>
            <Button variant="contained" color="success">success</Button>
        </DefaultThemeProvider>
    </>)
}
