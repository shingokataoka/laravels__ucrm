import * as colors from "@mui/material/colors";
import { createTheme } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


// lightモード時のthemeのカラーを指定
const lightTheme = createTheme({
    palette: {
        // lightモードのデフォルトthemeにオーバーライドを指定
        mode: 'light',
        text: { primary: '#333' },  // デフォ（primaryの？）全体のフォントカラー
        background: {
            default: '#fff',     // デフォルトの背景色
          },
        // 自作カラー。デフォ以外の背景色
         bg: {
            color1: colors.grey[100],
            color2: colors.grey[200],
            color3: colors.grey[300],
            color4: colors.grey[400],
            color5: colors.grey[500]
         },

        // muiのcolor="primary"（メインボタンなど）の色を設定
        primary: {
            light: colors.indigo[300],  // mainより明るめの色、用途不明（nightモード無関係）
            main: colors.indigo[300],   // 普段の色、値をmuiのcolorsにすると上下のlightとdarkは自動で決まる
            dark: colors.indigo[700],    // mainより暗めの色、ボタンホバー時など（darkモード無関係）
            contrastText: '#eee'        // テキストの色
        },
        // muiのcolor="secondary"（サブボタンなど）の色を設定
        secondary: {
            main: colors.deepPurple[300],   // mainをcolorsで指定したので、light、dark、contrastTextは自動で決まる
        },
        // muiのcolor="error"（エラーなど）の色を設定
        error: {
            main: colors.pink[300],        // 同上、mainをcolorsで指定より、他は自動で決まる
        },
        // muiのcolor="warning"（警告やDELETE成功など）の色を設定
        warning: {
            main: colors.pink[300],        // 同上、mainをcolorsで指定より、他は自動で決まる
        },
        // muiのcolor="info"（リンクなど）の色を設定
        info: {
            main: colors.purple[300],
        },
        // muiのcolor="success"（新規登録完了や更新成功など）の色を設定
        success: {
            main: colors.teal[400],
        }
    }
})


// darkモード時のthemeのカラーを指定
const darkTheme = createTheme({
    palette: {
        // darkモードのデフォルトthemeにオーバーライドを指定
        mode: 'dark',
        text: { primary: '#eee' },  // デフォ（primaryの？）全体のフォントカラー
        background: {
            default: '#030303',     // デフォルトの背景色

          },
        // 自作カラー。デフォ以外の背景色
         bg: {
            color1: colors.grey[900],
            color2: colors.grey[800],
            color3: colors.grey[700],
            color4: colors.grey[600],
            color5: colors.grey[500]
         },
        // muiのcolor="primary"（メインボタンなど）の色を設定
        primary: {
            light: colors.lightBlue[300],  // mainより明るめの色、用途不明（nightモード無関係）
            main: colors.lightBlue[500],   // 普段の色、値をmuiのcolorsにすると上下のlightとdarkは自動で決まる
            dark: colors.lightBlue[700],    // mainより暗めの色、ボタンホバー時など（darkモード無関係）
            contrastText: '#022'        // テキストの色
        },
        // muiのcolor="secondary"（サブボタンなど）の色を設定
        secondary: {
            main: colors.deepPurple[200],   // mainをcolorsで指定したので、light、dark、contrastTextは自動で決まる
        },
        // muiのcolor="error"（エラーなど）の色を設定
        error: {
            main: colors.orange[700],        // 同上、mainをcolorsで指定より、他は自動で決まる
        },
        // muiのcolor="warning"（警告やDELETE成功など）の色を設定
        warning: {
            main: colors.orange[700],        // 同上、mainをcolorsで指定より、他は自動で決まる
        },
        // muiのcolor="info"（リンクなど）の色を設定
        info: {
            main: colors.purple[200],
        },
        // muiのcolor="success"（新規登録完了や更新成功など）の色を設定
        success: {
            main: colors.teal[300],
        }
    }
})

export function defaultTheme() {
    // ダークモード=true、普通モード=false を取得
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    // 手動で設定の場合（カラー確認用）
    // const prefersDarkMode = true

    console.log('prefersDarkMode', prefersDarkMode)

    // darkかlightどちらか対応した方のthemeを取得
    const theme = prefersDarkMode ? darkTheme : lightTheme
    return theme
}

export function DefaultThemeProvider(props) {
    const theme = defaultTheme()

    return (<>
        <ThemeProvider theme={ theme }>
            <CssBaseline />
                { props.children }
        </ThemeProvider>
        </>)
}
