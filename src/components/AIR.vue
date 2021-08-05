<template>
    <nav class="navbar navbar-fixed-top global-header" id="global-header">
        <div class="container">
            <div>
                <div class="navbar-header">
                    <button type="button" data-target="#global-menu" id="global-menu-toggler" aria-label="global-menu-toggler" class="navbar-toggle global-menu-toggle">
                        <span class="icon-bar"></span> <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <button id="products-menu-toggler" type="button" data-target="#products-menu" aria-label="products-menu" class="navbar-toggle products-menu-toggle"></button>
                    <a href="https://air.io/" class="navbar-brand">air.io</a>
                    <div class="dropdown dropdown-lang">
                        <button type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-secondary dropdown-toggle">
                            ru
                        </button>
                        <div aria-labelledby="dropdownMenuButton" class="dropdown-menu">
                            <li class="hide">
                                <a href="https://air.io/ce/basic" class="dropdown-item">Ru </a>
                            </li>
                            <li></li>
                            <li>
                                <a href="https://air.io/en/ce/basic" class="dropdown-item">En
                                </a>
                            </li>
                            <li>
                                <a href="https://air.io/es/ce/basic" class="dropdown-item">Es
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
                <div id="global-menu" class="navbar-collapse global-menu">
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a href="https://air.io/ce" class="global-menu-link">
                                creators ecosystem
                            </a>
                        </li>
                        <li>
                            <a href="https://brands.air.io" class="global-menu-link">
                                brands
                            </a>
                        </li>
                        <li>
                            <a href="https://air.io/blog" class="global-menu-link"> blog </a>
                        </li>
                    </ul>
                </div>
                <div id="products-menu" class="navbar-collapse products-menu">
                    <div class="products-menu-row">
                        <a href="https://my.air.io/#/account/registration" target="_blank" rel="noopener noreferrer" class="sign-in-link">
                            Sign in to AIR CE
                        </a>
                    </div>
                    <div class="products-menu-row">
                        <div class="col-l">
                            <p class="menu-title">AIR CE: Channel Types</p>
                            <ul>
                                <li>
                                    <a href="https://air.io/en/ce/kids-and-teens" class="products-menu-link">Kids &amp; Teens</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-r">
                            <p class="menu-title">AIR CE: Packages</p>
                            <ul>
                                <li>
                                    <a href="https://air.io/ce/basic" class="products-menu-link">Basic Package</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="products-menu-row">
                        <div class="col-l">
                            <p class="menu-title">AIR CE: Products</p>
                            <ul>
                                <li>
                                    <a href="https://translate.air.io" class="products-menu-link">Translation &amp; Investment</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="products-menu-row">
                        <div class="col-l">
                            <p class="menu-title">AIR CE: Community</p>
                            <ul>
                                <li>
                                    <a href="https://im.air.io/" class="products-menu-link">AIR Influencer MeetUps</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <nav class="navbar navbar-fixed-top page-menu transparent">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="page-menu-wrapper">
                        <a href="#about" aria-label="about" class="page-menu-logo"><svg width="132" height="41" viewBox="0 0 132 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                    <path d="M32.1819 18.4331C35.1935 20.1517 36.7064 22.7582 36.7206 26.2526C36.7325 29.1591 35.7135 31.5473 33.6636 33.4172C31.6138 35.2871 29.0866 36.2281 26.0821 36.2404L11.533 36.2996L11.3933 2.009L24.9136 1.95391C27.8528 1.94194 30.3222 2.84631 32.3218 4.66703C34.3539 6.45496 35.3757 8.7532 35.3871 11.5618C35.3987 14.403 34.3303 16.6934 32.1819 18.4331ZM24.9394 8.27319L18.1792 8.30073L18.21 15.8447L24.9701 15.8171C26.0152 15.8129 26.8791 15.4501 27.562 14.7288C28.2776 14.0074 28.6331 13.1079 28.6287 12.0302C28.6244 10.9525 28.2778 10.0558 27.5891 9.34012C26.9003 8.62444 26.0171 8.2688 24.9394 8.27319ZM26.0563 29.9211C27.1993 29.9164 28.1449 29.537 28.893 28.7828C29.6409 27.996 30.0125 27.0147 30.0077 25.839C30.003 24.696 29.6236 23.7505 28.8694 23.0024C28.1151 22.2217 27.1664 21.8336 26.0234 21.8383L18.2345 21.87L18.2674 29.9528L26.0563 29.9211ZM59.7968 11.6093L66.1161 11.5835L66.2159 36.0769L59.8966 36.1026L59.8848 33.2124C58.0004 35.6041 55.3436 36.807 51.9146 36.8209C48.6488 36.8342 45.8352 35.6047 43.4737 33.1323C41.1448 30.6271 39.9729 27.562 39.9581 23.937C39.9434 20.312 41.0903 17.2537 43.3989 14.7623C45.74 12.2381 48.5434 10.9693 51.8092 10.956C55.2383 10.942 57.9047 12.1232 59.8086 14.4995L59.7968 11.6093ZM48.2083 28.9001C49.4871 30.1685 51.1063 30.7988 53.0657 30.7908C55.0252 30.7828 56.6391 30.1394 57.9076 28.8606C59.2086 27.5489 59.855 25.8807 59.8467 23.8559C59.8385 21.8312 59.1786 20.1846 57.8671 18.9163C56.5881 17.6152 54.9689 16.9686 53.0094 16.9766C51.05 16.9846 49.4361 17.6443 48.1677 18.9558C46.8993 20.2346 46.2692 21.8864 46.2774 23.9112C46.2857 25.936 46.9293 27.599 48.2083 28.9001ZM77.5128 18.4933C77.5154 19.1465 77.9422 19.6836 78.793 20.1047C79.6764 20.493 80.7392 20.8479 81.9815 21.1694C83.2237 21.4583 84.4663 21.8451 85.7093 22.3299C86.9522 22.7821 88.0004 23.5616 88.854 24.6685C89.7403 25.7753 90.1869 27.1615 90.1936 28.827C90.2039 31.3416 89.2647 33.2886 87.3762 34.668C85.5201 36.0145 83.1878 36.6935 80.3793 36.705C75.35 36.7255 71.913 34.7963 70.0683 30.9175L75.5422 27.809C76.2694 29.9288 77.8739 30.9837 80.3559 30.9735C82.6093 30.9644 83.7331 30.2576 83.7274 28.8533C83.7247 28.2002 83.2817 27.6795 82.3984 27.2912C81.5475 26.8701 80.501 26.4988 79.2586 26.1772C78.0163 25.8557 76.7737 25.4526 75.5307 24.9677C74.2877 24.4829 73.2232 23.7198 72.3372 22.6783C71.4837 21.6041 71.0537 20.2669 71.0471 18.6666C71.0373 16.25 71.9113 14.3522 73.6693 12.9734C75.4597 11.5618 77.6776 10.8506 80.3229 10.8398C82.315 10.8317 84.1294 11.2815 85.766 12.1893C87.4025 13.0644 88.6976 14.3328 89.6515 15.9945L84.2749 18.9557C83.4844 17.2933 82.1747 16.4659 80.3458 16.4733C79.5294 16.4766 78.8443 16.659 78.2906 17.0205C77.7695 17.3819 77.5103 17.8728 77.5128 18.4933ZM97.3101 8.51721C96.2651 8.52147 95.3491 8.14963 94.5623 7.4017C93.808 6.62097 93.4287 5.70808 93.4244 4.66303C93.4202 3.61799 93.792 2.70204 94.5399 1.91519C95.3205 1.12821 96.2334 0.732594 97.2784 0.728337C98.3561 0.723946 99.2721 1.11211 100.026 1.89284C100.813 2.67343 101.209 3.58625 101.213 4.6313C101.218 5.67635 100.829 6.59236 100.049 7.37934C99.3007 8.13353 98.3878 8.51282 97.3101 8.51721ZM94.2868 35.9625L94.187 11.4692L100.506 11.4434L100.606 35.9367L94.2868 35.9625ZM118.052 36.5515C114.361 36.5665 111.27 35.3381 108.778 32.8662C106.318 30.3942 105.081 27.3294 105.066 23.6717C105.051 20.014 106.264 16.9392 108.703 14.4473C111.175 11.9552 114.256 10.7016 117.946 10.6866C120.33 10.6768 122.504 11.2395 124.468 12.3745C126.432 13.5096 127.925 15.0384 128.945 16.9611L123.52 20.1674C123.026 19.157 122.272 18.36 121.257 17.7763C120.275 17.1924 119.163 16.903 117.922 16.9081C116.028 16.9158 114.463 17.559 113.228 18.8377C111.992 20.0838 111.378 21.6865 111.386 23.646C111.393 25.5728 112.02 27.1705 113.267 28.4391C114.513 29.675 116.083 30.2891 117.977 30.2814C119.251 30.2762 120.376 29.994 121.354 29.4349C122.364 28.8429 123.112 28.0397 123.597 27.0253L129.097 30.1381C128.027 32.0693 126.514 33.6268 124.56 34.8104C122.605 35.9614 120.436 36.5418 118.052 36.5515Z" fill="#32353D"></path>
                                    <path d="M32.1819 18.4331C35.1935 20.1517 36.7064 22.7582 36.7206 26.2526C36.7325 29.1591 35.7135 31.5473 33.6636 33.4172C31.6138 35.2871 29.0866 36.2281 26.0821 36.2404L11.533 36.2996L11.3933 2.009L24.9136 1.95391C27.8528 1.94194 30.3222 2.84631 32.3218 4.66703C34.3539 6.45496 35.3757 8.7532 35.3871 11.5618C35.3987 14.403 34.3303 16.6934 32.1819 18.4331ZM24.9394 8.27319L18.1792 8.30073L18.21 15.8447L24.9701 15.8171C26.0152 15.8129 26.8791 15.4501 27.562 14.7288C28.2776 14.0074 28.6331 13.1079 28.6287 12.0302C28.6244 10.9525 28.2778 10.0558 27.5891 9.34012C26.9003 8.62444 26.0171 8.2688 24.9394 8.27319ZM26.0563 29.9211C27.1993 29.9164 28.1449 29.537 28.893 28.7828C29.6409 27.996 30.0125 27.0147 30.0077 25.839C30.003 24.696 29.6236 23.7505 28.8694 23.0024C28.1151 22.2217 27.1664 21.8336 26.0234 21.8383L18.2345 21.87L18.2674 29.9528L26.0563 29.9211ZM59.7968 11.6093L66.1161 11.5835L66.2159 36.0769L59.8966 36.1026L59.8848 33.2124C58.0004 35.6041 55.3436 36.807 51.9146 36.8209C48.6488 36.8342 45.8352 35.6047 43.4737 33.1323C41.1448 30.6271 39.9729 27.562 39.9581 23.937C39.9434 20.312 41.0903 17.2537 43.3989 14.7623C45.74 12.2381 48.5434 10.9693 51.8092 10.956C55.2383 10.942 57.9047 12.1232 59.8086 14.4995L59.7968 11.6093ZM48.2083 28.9001C49.4871 30.1685 51.1063 30.7988 53.0657 30.7908C55.0252 30.7828 56.6391 30.1394 57.9076 28.8606C59.2086 27.5489 59.855 25.8807 59.8467 23.8559C59.8385 21.8312 59.1786 20.1846 57.8671 18.9163C56.5881 17.6152 54.9689 16.9686 53.0094 16.9766C51.05 16.9846 49.4361 17.6443 48.1677 18.9558C46.8993 20.2346 46.2692 21.8864 46.2774 23.9112C46.2857 25.936 46.9293 27.599 48.2083 28.9001ZM77.5128 18.4933C77.5154 19.1465 77.9422 19.6836 78.793 20.1047C79.6764 20.493 80.7392 20.8479 81.9815 21.1694C83.2237 21.4583 84.4663 21.8451 85.7093 22.3299C86.9522 22.7821 88.0004 23.5616 88.854 24.6685C89.7403 25.7753 90.1869 27.1615 90.1936 28.827C90.2039 31.3416 89.2647 33.2886 87.3762 34.668C85.5201 36.0145 83.1878 36.6935 80.3793 36.705C75.35 36.7255 71.913 34.7963 70.0683 30.9175L75.5422 27.809C76.2694 29.9288 77.8739 30.9837 80.3559 30.9735C82.6093 30.9644 83.7331 30.2576 83.7274 28.8533C83.7247 28.2002 83.2817 27.6795 82.3984 27.2912C81.5475 26.8701 80.501 26.4988 79.2586 26.1772C78.0163 25.8557 76.7737 25.4526 75.5307 24.9677C74.2877 24.4829 73.2232 23.7198 72.3372 22.6783C71.4837 21.6041 71.0537 20.2669 71.0471 18.6666C71.0373 16.25 71.9113 14.3522 73.6693 12.9734C75.4597 11.5618 77.6776 10.8506 80.3229 10.8398C82.315 10.8317 84.1294 11.2815 85.766 12.1893C87.4025 13.0644 88.6976 14.3328 89.6515 15.9945L84.2749 18.9557C83.4844 17.2933 82.1747 16.4659 80.3458 16.4733C79.5294 16.4766 78.8443 16.659 78.2906 17.0205C77.7695 17.3819 77.5103 17.8728 77.5128 18.4933ZM97.3101 8.51721C96.2651 8.52147 95.3491 8.14963 94.5623 7.4017C93.808 6.62097 93.4287 5.70808 93.4244 4.66303C93.4202 3.61799 93.792 2.70204 94.5399 1.91519C95.3205 1.12821 96.2334 0.732594 97.2784 0.728337C98.3561 0.723946 99.2721 1.11211 100.026 1.89284C100.813 2.67343 101.209 3.58625 101.213 4.6313C101.218 5.67635 100.829 6.59236 100.049 7.37934C99.3007 8.13353 98.3878 8.51282 97.3101 8.51721ZM94.2868 35.9625L94.187 11.4692L100.506 11.4434L100.606 35.9367L94.2868 35.9625ZM118.052 36.5515C114.361 36.5665 111.27 35.3381 108.778 32.8662C106.318 30.3942 105.081 27.3294 105.066 23.6717C105.051 20.014 106.264 16.9392 108.703 14.4473C111.175 11.9552 114.256 10.7016 117.946 10.6866C120.33 10.6768 122.504 11.2395 124.468 12.3745C126.432 13.5096 127.925 15.0384 128.945 16.9611L123.52 20.1674C123.026 19.157 122.272 18.36 121.257 17.7763C120.275 17.1924 119.163 16.903 117.922 16.9081C116.028 16.9158 114.463 17.559 113.228 18.8377C111.992 20.0838 111.378 21.6865 111.386 23.646C111.393 25.5728 112.02 27.1705 113.267 28.4391C114.513 29.675 116.083 30.2891 117.977 30.2814C119.251 30.2762 120.376 29.994 121.354 29.4349C122.364 28.8429 123.112 28.0397 123.597 27.0253L129.097 30.1381C128.027 32.0693 126.514 33.6268 124.56 34.8104C122.605 35.9614 120.436 36.5418 118.052 36.5515Z" fill="url(#paint0_linear)" fill-opacity="0.13"></path>
                                </g>
                                <path d="M0.685304 33.0639C0.685304 32.5527 0.857399 32.1225 1.20159 31.7732C1.54578 31.424 1.96842 31.2493 2.46952 31.2493C2.97062 31.2493 3.39327 31.424 3.73746 31.7732C4.08165 32.1225 4.25374 32.5527 4.25374 33.0639L4.25374 33.9978L6 33.9978L6 35.0456L0.685304 35.0456L0.685304 33.0639ZM3.27432 33.0639C3.27432 32.8412 3.1984 32.6565 3.04655 32.5097C2.88964 32.3629 2.6973 32.2895 2.46952 32.2895C2.23669 32.2895 2.04435 32.3629 1.8925 32.5097C1.74065 32.6565 1.66473 32.8412 1.66473 33.0639L1.66473 33.9978L3.27432 33.9978L3.27432 33.0639ZM6 27.6919L5.04335 28.0108L5.04335 30.129L6 30.4479L6 31.5792L0.685304 29.7191L0.685304 28.4208L6 26.553L6 27.6919ZM4.06393 29.795L4.06393 28.3372L1.8925 29.0661L4.06393 29.795ZM6.10629 23.7091C6.10629 24.5088 5.84056 25.1693 5.30909 25.6907C4.77762 26.212 4.12214 26.4727 3.34265 26.4727C2.5581 26.4727 1.90262 26.212 1.37621 25.6907C0.844744 25.1693 0.57901 24.5088 0.579009 23.7091C0.579009 23.2282 0.692896 22.7853 0.920669 22.3804C1.14338 21.9704 1.44708 21.6515 1.83176 21.4237L2.35564 22.3272C2.11774 22.4588 1.93299 22.6461 1.80139 22.8891C1.66473 23.132 1.59639 23.4054 1.59639 23.7091C1.59639 24.2253 1.75837 24.6429 2.08231 24.9618C2.40625 25.2756 2.82637 25.4325 3.34265 25.4325C3.85387 25.4325 4.27146 25.2756 4.5954 24.9618C4.91934 24.6429 5.08132 24.2253 5.08132 23.7091C5.08132 23.4054 5.01552 23.132 4.88391 22.8891C4.74725 22.6411 4.5625 22.4538 4.32967 22.3272L4.85354 21.4237C5.23823 21.6515 5.54445 21.9679 5.77223 22.3728C5.99494 22.7777 6.10629 23.2231 6.10629 23.7091ZM6 16.627L6 17.8342L3.50968 19.7323L6 19.7323L6 20.7801L0.685303 20.7801L0.685303 19.7324L3.03136 19.7324L0.685303 17.9102L0.685303 16.703L3.26673 18.6694L6 16.627ZM6 12.5589L5.04335 12.8778L5.04335 14.9961L6 15.315L6 16.4463L0.685303 14.5861L0.685303 13.2878L6 11.4201L6 12.5589ZM4.06393 14.662L4.06393 13.2043L1.8925 13.9332L4.06393 14.662ZM3.14525 5.88081L3.55524 5.88081C4.31448 5.88081 4.92947 6.12376 5.4002 6.60968C5.87093 7.09559 6.10629 7.72323 6.10629 8.4926C6.10629 9.31258 5.84056 9.99337 5.30909 10.535C4.77256 11.0715 4.11961 11.3398 3.35024 11.3398C2.57582 11.3398 1.92034 11.074 1.38381 10.5426C0.847274 10.006 0.579009 9.34295 0.579009 8.55334C0.579009 8.0573 0.692895 7.60429 0.920668 7.19429C1.14338 6.7843 1.44201 6.46542 1.81657 6.23765L2.33286 7.13355C2.11521 7.2601 1.93805 7.45244 1.80139 7.71058C1.66473 7.96366 1.59639 8.24711 1.59639 8.56093C1.59639 9.06709 1.76343 9.48468 2.09749 9.81368C2.4265 10.1376 2.84408 10.2996 3.35024 10.2996C3.85134 10.2996 4.2664 10.1351 4.5954 9.80609C4.91934 9.47202 5.08132 9.03166 5.08132 8.48501C5.08132 8.08008 4.99274 7.74601 4.81558 7.48281C4.63336 7.21454 4.38534 7.03232 4.07152 6.93615L4.07152 8.54575L3.14525 8.54575L3.14525 5.88081ZM4.9978 4.08781L4.9978 1.84804L6 1.84804L6 5.13556L0.685303 5.13556L0.685302 1.88601L1.6875 1.88601L1.6875 4.08781L2.81877 4.08781L2.81877 2.07582L3.80579 2.07582L3.80579 4.08781L4.9978 4.08781Z" fill="#39323E"></path>
                                <defs>
                                    <filter id="filter0_d" x="9.09977" y="0.0404539" width="122.29" height="40.6798" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                        <feOffset dy="1.60548"></feOffset>
                                        <feGaussianBlur stdDeviation="1.14677"></feGaussianBlur>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                    </filter>
                                    <linearGradient id="paint0_linear" x1="69.3948" y1="-9.93648" x2="69.6387" y2="49.9361" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF0000"></stop>
                                        <stop offset="1" stop-color="#3E008C" stop-opacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg></a>
                        <ul class="page-menu-list">
                            <li class="page-menu-item">
                                <a href="#about" class="page-menu-link"> About </a>
                            </li>
                            <li class="page-menu-item">
                                <a href="#creators-ecosystem" class="page-menu-link">
                                    Creators Ecosystem
                                </a>
                            </li>
                            <li class="page-menu-item">
                                <a href="#services" class="page-menu-link">
                                    What's inside
                                    <span class="icon-count"> 17 </span></a>
                            </li>
                            <li class="page-menu-item">
                                <a href="https://my.air.io/#/account/registration" class="
                    page-menu-link
                    page-menu-link-button
                    page-menu-link-button-black
                  ">
                                    GET BASIC
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <main drag-item-title="" class="main main-en">
        <section id="about" class="section section-banner">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="banner-icons">
                            <div id="right-1" class="banner-icon right">
                                <img src="https://air.io/templates/images/basic/services/toolbox.svg" alt="Product" />
                            </div>
                            <div id="right-2" class="banner-icon right">
                                <img src="https://air.io/templates/images/basic/services/referral.svg" alt="Product" />
                            </div>
                            <div id="right-3" class="banner-icon right">
                                <img src="https://air.io/templates/images/basic/services/finances.svg" alt="Product" />
                            </div>
                            <div id="right-4" class="banner-icon right">
                                <img src="https://air.io/templates/images/basic/services/hack.svg" alt="Product" />
                            </div>
                            <div id="right-5" class="banner-icon right">
                                <img src="https://air.io/templates/images/basic/services/copyright.svg" alt="Product" />
                            </div>
                            <div id="right-6" class="banner-icon right">
                                <img src="https://air.io/templates/images/basic/services/instagram.svg" alt="Product" />
                            </div>
                            <div id="left-1" class="banner-icon left">
                                <img src="https://air.io/templates/images/basic/services/messenger.svg" alt="Product" />
                            </div>
                            <div id="left-2" class="banner-icon left">
                                <img src="https://air.io/templates/images/basic/services/design.svg" alt="Product" />
                            </div>
                            <div id="left-3" class="banner-icon left">
                                <img src="https://air.io/templates/images/basic/services/payments.svg" alt="Product" />
                            </div>
                            <div id="left-4" class="banner-icon left">
                                <img src="https://air.io/templates/images/basic/services/music.svg" alt="Product" />
                            </div>
                            <div id="left-5" class="banner-icon left">
                                <img src="https://air.io/templates/images/basic/services/meetups.svg" alt="Product" />
                            </div>
                            <div id="left-6" class="banner-icon left">
                                <img src="https://air.io/templates/images/basic/services/moderation.svg" alt="Product" />
                            </div>
                        </div>
                        <div class="banner-content">
                            <div class="banner-title">
                                <div class="banner-left-text">Package</div>
                                <div class="not-service not-service-mobile">
                                    <div class="not-service-icon"></div>
                                    <div class="not-service-text">Not provided by AdSense</div>
                                </div>
                                <span class="linear-wipe"> Basic </span>
                                <span class="sup-text"><span class="number"> 100%</span> <span>Must Have</span>
                                    <span>for YouTubers</span>
                                </span>
                                <div class="not-service not-service-desktop">
                                    <div class="not-service-icon"></div>
                                    <div class="not-service-text">Not provided by AdSense</div>
                                </div>
                            </div>
                            <div class="banner-desc">
                                17 essential services to support, develop and protect your
                                creativity on YouTube and beyond
                            </div>
                            <div class="banner-desc-sub">
                                Accessible immediately after connecting to AIR Creators
                                Ecosystem.
                            </div>
                            <div class="banner-button">
                                <a href="https://my.air.io/#/account/registration" class="basic-button basic-button-big basic-button-blue">
                                    GET now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="staff" class="section section-staff">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="staff-content">
                            <div class="s-title staff-title">
                                Don't sweat the minor staff, focus on what really matters! </div>
                            <div class="s-description staff-description">
                                Trust the solution of the basic needs of your channel to our team. </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="anime-item anime-item-1"></div>
            <div class="anime-item anime-item-2"></div>
            <div class="anime-item anime-item-3"></div>
            <div class="anime-item anime-item-4"></div>
        </section>
    </main>
</template>

<script>
    export default {
        name: "AIR",
        props: {},
    };

</script>

<style scoped lang="scss" src="../styles.scss"></style>
