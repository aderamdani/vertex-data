import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Vertex Data",
  description: "Mencapai Puncak Keahlian Data",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',

    // Menu Navigasi Atas (Navbar)
    nav: [
      { text: '🏠 Home', link: '/' },
      {
        text: '📊 Microsoft Excel',
        items: [
          { text: '📊 Fondasi Excel', link: '/excel/excel' },
          { text: '🔍 Audit dengan Inquire', link: '/excel/inquire-add-in' }
        ]
      },
      { text: '✨ Power Query', link: '/power-query/introduction' },
      { text: '🏗️ Power Pivot & DAX', link: '/power-pivot/data-modeling' },
      { text: '💻 VBA & Macro', link: '/vba/record-macro' },
      {
        text: '⚡ Power Platform',
        items: [
          { text: '📈 Visualisasi Power BI', link: '/power-platform/power-bi' },
          { text: '📱 Aplikasi dengan Power Apps', link: '/power-platform/power-apps' },
          { text: '🤖 Alur Kerja Power Automate', link: '/power-platform/power-automate' }
        ]
      },
      { text: '👥 Tentang Kami', link: '/about' }
    ],

    // ===============================================
    // ==== BAGIAN SIDEBAR YANG DIPERBARUI DI SINI ====
    // ===============================================
    sidebar: {
      '/': [
        {
          text: '📊 Microsoft Excel',
          collapsible: true,
          collapsed: false, // Set to false to show expanded by default
          items: [
            { text: '📊 Fondasi Excel', link: '/excel/excel' },
            { text: '🔍 Audit dengan Inquire', link: '/excel/inquire-add-in' },
            { text: '➕ Formula & Fungsi Esensial', link: '/excel/formulas-functions' },
            { text: '📈 PivotTable & PivotChart', link: '/excel/pivot-tables' },
            { text: '✅ Validasi Data & Pemformatan Bersyarat', link: '/excel/data-validation-conditional-formatting' },
            { text: '🔒 Proteksi & Keamanan Workbook', link: '/excel/protection-security' }
          ]
        },
        {
          text: '✨ Power Query',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '✨ Transformasi Power Query', link: '/power-query/introduction' },
            { text: '🔗 Koneksi Data Beragam Sumber', link: '/power-query/data-sources' },
            { text: '🔄 Menggabungkan & Menambahkan Data', link: '/power-query/merge-append' },
            { text: '🐞 Penanganan Error & Debugging', link: '/power-query/error-handling' },
            { text: '⚙️ Fungsi M Lanjutan', link: '/power-query/advanced-m' }
          ]
        },
        {
          text: '🏗️ Power Pivot & DAX',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '🏗️ Model Data Power Pivot', link: '/power-pivot/data-modeling' },
            { text: '🤝 Hubungan Tabel & Diagram', link: '/power-pivot/table-relationships' },
            { text: '🧮 Kalkulasi DAX Dasar', link: '/power-pivot/dax-basics' },
            { text: '⏰ Time Intelligence Functions', link: '/power-pivot/time-intelligence' },
            { text: '🎯 KPI & Ukuran Kustom', link: '/power-pivot/kpis-measures' }
          ]
        },
        {
          text: '💻 Otomatisasi VBA',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '💻 Otomatisasi VBA', link: '/vba/record-macro' },
            { text: '📝 Pengenalan Editor VBA', link: '/vba/vba-editor' },
            { text: '🔡 Variabel & Tipe Data', link: '/vba/variables-data-types' },
            { text: '🚦 Struktur Kontrol (If, Loop)', link: '/vba/control-structures' },
            { text: '📍 Bekerja dengan Range & Worksheet', link: '/vba/ranges-worksheets' },
            { text: '⚡ Event Handling', link: '/vba/event-handling' }
          ]
        },
        {
          text: '⚡ Power Platform',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '📈 Visualisasi Power BI', link: '/power-platform/power-bi' },
            { text: '📱 Aplikasi dengan Power Apps', link: '/power-platform/power-apps' },
            { text: '🤖 Alur Kerja Power Automate', link: '/power-platform/power-automate' },
            { text: '🖥️ Power BI Desktop & Service', link: '/power-platform/power-bi-desktop-service' },
            { text: '🎨 Power Apps Canvas & Model-driven', link: '/power-platform/power-apps-canvas-model' },
            { text: '☁️ Power Automate Cloud & Desktop Flows', link: '/power-platform/power-automate-flows' }
          ]
        }
      ]
    },

    // Path untuk CSS Kustom
    style: {
      overrides: ['/.vitepress/custom.css']
    },

    // Menambahkan link media sosial (opsional)
    socialLinks: [],

    // Konfigurasi untuk Outline (Sidebar Kanan)
    outline: 'deep',

    // Konfigurasi Footer
    footer: {
      message: 'Dibuat dengan ❤️ oleh <a href="https://linkedin.com/in/aderamdani" target="_blank">Ade Ramdani</a>.',
      copyright: 'Copyright © 2025 Vertex Data'
    },

    // Tambahkan konfigurasi layout switch
    appearance: {
      toggleSwitch: true,
      initialValue: 'dark' // atau 'light' atau 'auto'
    }
  }
})