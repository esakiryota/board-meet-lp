import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${geistSans.className} min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100`}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mr-3"></div>
              <h1 className="text-xl font-bold text-gray-900">Board Meet</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">機能</a>
              <a href="https://github.com/esakiryota/board-meet-poc/releases/download/v0.0.10/board-meet-darwin-arm64-0.0.10.zip" className="text-gray-700 hover:text-blue-600 transition-colors">ダウンロード</a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600">機能</a>
              <a href="https://github.com/esakiryota/board-meet-poc/releases/download/v0.0.10/board-meet-darwin-arm64-0.0.10.zip" className="block py-2 text-gray-700 hover:text-blue-600">ダウンロード</a>
            </div>
          )}
        </nav>
      </header>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            次世代の
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              オンライン会議
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Board Meetは画面共有、手書き機能、AR表示を組み合わせた革新的なデスクトップアプリケーションです
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/esakiryota/board-meet-poc/releases/download/v0.0.10/board-meet-darwin-arm64-0.0.10.zip"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Mac版をダウンロード
            </a>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors">
              デモを見る
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Board Meetの特徴
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              従来のオンライン会議ツールを超えた、新しいコラボレーション体験
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                複数画面共有の同時表示
              </h4>
              <p className="text-gray-600 leading-relaxed">
                ボード上に複数メンバーの画面共有を同時に表示。比較しながらの作業やレビューが簡単に行えます。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                ドラッグ&ドロップで画像共有
              </h4>
              <p className="text-gray-600 leading-relaxed">
                画像ファイルを簡単にドラッグ&ドロップで添付。資料や図解を瞬時に共有できます。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                ペンシル機能と文字入力
              </h4>
              <p className="text-gray-600 leading-relaxed">
                直感的なペンシル機能と文字入力で、画面共有しながらの説明や注釈が簡単に行えます。
              </p>
            </div>
          </div>

          {/* AR Feature - Special highlight */}
          <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1V2a1 1 0 011-1m8 0H8m0 0v3m8-3v3m-4 4h.01M12 16h.01" />
                </svg>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                AR機能で手をボード上に表示
              </h4>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                革新的なAR技術により、あなたの手の動きをリアルタイムでボード上に表示。
                まるで隣にいるような直感的な説明が可能になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="bg-gradient-to-br from-gray-900 to-indigo-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            今すぐBoard Meetを始めよう
          </h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            macOS対応のデスクトップアプリケーションをダウンロードして、
            新しいオンライン会議体験を始めましょう。
          </p>

          <div className="bg-white rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-gray-700 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <h4 className="text-2xl font-bold text-gray-900">Board Meet</h4>
                <p className="text-gray-600">Version 0.0.3 for macOS</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                macOS 10.15 Catalina以降に対応
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Intel & Apple Silicon両対応
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                無料でご利用いただけます
              </div>
            </div>

            <a
              href="https://github.com/esakiryota/board-meet-poc/releases/download/v0.0.10/board-meet-darwin-arm64-0.0.10.zip"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Mac版をダウンロード
            </a>
            <p className="text-sm text-gray-500 mt-4">
              ファイルサイズ: 約120MB | 最終更新: 2024年12月
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mr-3"></div>
                <h5 className="text-xl font-bold text-white">Board Meet</h5>
              </div>
              <p className="text-gray-400 leading-relaxed">
                次世代のオンライン会議ツール。画面共有、手書き機能、AR表示で、
                より直感的で効果的なコミュニケーションを実現します。
              </p>
            </div>
            <div>
              <h6 className="font-semibold text-white mb-4">製品</h6>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition-colors">機能</a></li>
                <li><a href="https://github.com/esakiryota/board-meet-poc/releases/download/v0.0.10/board-meet-darwin-arm64-0.0.10.zip" className="hover:text-white transition-colors">ダウンロード</a></li>
                <li><a href="#" className="hover:text-white transition-colors">システム要件</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-white mb-4">サポート</h6>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">ヘルプ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Board Meet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
