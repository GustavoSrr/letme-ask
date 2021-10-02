import React from 'react'

import { Container } from './styles'

type LogoProps = {
  large?: boolean
};

export function Logo ({
  large = false
}: LogoProps) {
  return (
    <Container className={`${large ? 'large' : ''}`}>
      <svg width="161" height="69" viewBox="0 0 161 69" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M147.245 53.3859L146.548 50.617L148.579 48.6099C153.343 43.9004 156 38.1391 156 32.0357C156 18.0796 141.426 5 121 5C106.14 5 94.3776 11.9224 89.0702 21.0687C87.7757 20.0039 86.2796 19.1754 84.6477 18.6491C90.977 7.64001 104.873 0 121 0C143.094 0 161 14.3391 161 32.0357C161 39.675 157.656 46.6674 152.094 52.1658C153.269 56.8385 156.104 61.2041 158.191 63.9561C158.267 64.0561 158.342 64.1539 158.416 64.2496C158.926 64.9114 159.383 65.4683 159.75 65.8995C160.295 66.5403 160.639 66.9034 160.656 66.9208C161 67.275 161.094 67.7987 160.891 68.2607C160.687 68.7228 160.25 69 159.75 69C159.372 69 158.997 68.9935 158.626 68.9807L158.537 68.9776C157.721 68.9474 156.923 68.8873 156.142 68.8009C155.962 68.7809 155.782 68.7595 155.603 68.7368C147.317 67.6809 141.093 63.6847 137.781 61.0835C132.672 62.9779 127 64.0714 121 64.0714C104.428 64.0714 90.2117 56.0039 84.1411 44.5033C85.796 44.0408 87.3227 43.2709 88.6556 42.259C93.7463 51.7711 105.74 59.0714 121 59.0714C126.391 59.0714 131.475 58.0889 136.043 56.3954L138.668 55.4221L140.87 57.1512C143.08 58.8873 146.66 61.2433 151.288 62.6906C149.7 60.0689 148.118 56.8566 147.245 53.3859Z" fill="url(#paint0_linear)" />
        <path d="M10.8858 41.28C9.67245 41.2613 8.68311 41.1307 7.91778 40.888C7.17111 40.6453 6.57378 40.3093 6.12578 39.88C5.69645 39.432 5.39778 38.9 5.22978 38.284C5.08045 37.6493 5.00578 36.94 5.00578 36.156V19.944L9.17778 19.272V35.316C9.17778 35.6893 9.20578 36.0253 9.26178 36.324C9.31778 36.6227 9.42045 36.8747 9.56978 37.08C9.73778 37.2853 9.97111 37.4533 10.2698 37.584C10.5684 37.7147 10.9698 37.7987 11.4738 37.836L10.8858 41.28ZM12.6052 33.748C12.6052 32.4413 12.8012 31.3027 13.1932 30.332C13.6038 29.3427 14.1358 28.5213 14.7892 27.868C15.4425 27.2147 16.1892 26.72 17.0292 26.384C17.8878 26.048 18.7652 25.88 19.6612 25.88C21.7518 25.88 23.4038 26.524 24.6172 27.812C25.8305 29.0813 26.4372 30.9573 26.4372 33.44C26.4372 33.6827 26.4278 33.9533 26.4092 34.252C26.3905 34.532 26.3718 34.784 26.3532 35.008H16.8892C16.9825 35.8667 17.3838 36.548 18.0932 37.052C18.8025 37.556 19.7545 37.808 20.9492 37.808C21.7145 37.808 22.4612 37.7427 23.1892 37.612C23.9358 37.4627 24.5425 37.2853 25.0092 37.08L25.5692 40.468C25.3452 40.58 25.0465 40.692 24.6732 40.804C24.2998 40.916 23.8798 41.0093 23.4132 41.084C22.9652 41.1773 22.4798 41.252 21.9572 41.308C21.4345 41.364 20.9118 41.392 20.3892 41.392C19.0638 41.392 17.9065 41.196 16.9172 40.804C15.9465 40.412 15.1345 39.88 14.4812 39.208C13.8465 38.5173 13.3705 37.7053 13.0532 36.772C12.7545 35.8387 12.6052 34.8307 12.6052 33.748ZM22.4052 32.152C22.3865 31.7973 22.3212 31.452 22.2092 31.116C22.1158 30.78 21.9572 30.4813 21.7332 30.22C21.5278 29.9587 21.2572 29.744 20.9212 29.576C20.6038 29.408 20.2025 29.324 19.7172 29.324C19.2505 29.324 18.8492 29.408 18.5132 29.576C18.1772 29.7253 17.8972 29.9307 17.6732 30.192C17.4492 30.4533 17.2718 30.7613 17.1412 31.116C17.0292 31.452 16.9452 31.7973 16.8892 32.152H22.4052ZM28.9567 22.604L33.1287 21.932V26.272H38.1407V29.744H33.1287V34.924C33.1287 35.8013 33.2781 36.5013 33.5767 37.024C33.8941 37.5467 34.5194 37.808 35.4527 37.808C35.9007 37.808 36.3581 37.7707 36.8247 37.696C37.3101 37.6027 37.7487 37.4813 38.1407 37.332L38.7287 40.58C38.2247 40.7853 37.6647 40.9627 37.0487 41.112C36.4327 41.2613 35.6767 41.336 34.7807 41.336C33.6421 41.336 32.6994 41.1867 31.9527 40.888C31.2061 40.5707 30.6087 40.1413 30.1607 39.6C29.7127 39.04 29.3954 38.368 29.2087 37.584C29.0407 36.8 28.9567 35.932 28.9567 34.98V22.604ZM49.0701 33.188C49.0701 31.844 48.8928 30.892 48.5381 30.332C48.2021 29.772 47.6141 29.492 46.7741 29.492C46.5128 29.492 46.2421 29.5107 45.9621 29.548C45.6821 29.5667 45.4115 29.5947 45.1501 29.632V41H40.9781V26.776C41.3328 26.6827 41.7435 26.5893 42.2101 26.496C42.6955 26.384 43.1995 26.2907 43.7221 26.216C44.2635 26.1227 44.8141 26.0573 45.3741 26.02C45.9341 25.964 46.4848 25.936 47.0261 25.936C48.0901 25.936 48.9488 26.076 49.6021 26.356C50.2741 26.6173 50.8248 26.9347 51.2541 27.308C51.8515 26.8787 52.5328 26.5427 53.2981 26.3C54.0821 26.0573 54.8008 25.936 55.4541 25.936C56.6301 25.936 57.5915 26.104 58.3381 26.44C59.1035 26.7573 59.7101 27.2147 60.1581 27.812C60.6061 28.4093 60.9141 29.1187 61.0821 29.94C61.2501 30.7613 61.3341 31.676 61.3341 32.684V41H57.1621V33.188C57.1621 31.844 56.9848 30.892 56.6301 30.332C56.2941 29.772 55.7061 29.492 54.8661 29.492C54.6421 29.492 54.3248 29.548 53.9141 29.66C53.5221 29.772 53.1955 29.912 52.9341 30.08C53.0648 30.5093 53.1488 30.9667 53.1861 31.452C53.2235 31.9187 53.2421 32.4227 53.2421 32.964V41H49.0701V33.188ZM63.8627 33.748C63.8627 32.4413 64.0587 31.3027 64.4507 30.332C64.8613 29.3427 65.3933 28.5213 66.0467 27.868C66.7 27.2147 67.4467 26.72 68.2867 26.384C69.1453 26.048 70.0227 25.88 70.9187 25.88C73.0093 25.88 74.6613 26.524 75.8747 27.812C77.088 29.0813 77.6947 30.9573 77.6947 33.44C77.6947 33.6827 77.6853 33.9533 77.6667 34.252C77.648 34.532 77.6293 34.784 77.6107 35.008H68.1467C68.24 35.8667 68.6413 36.548 69.3507 37.052C70.06 37.556 71.012 37.808 72.2067 37.808C72.972 37.808 73.7187 37.7427 74.4467 37.612C75.1933 37.4627 75.8 37.2853 76.2667 37.08L76.8267 40.468C76.6027 40.58 76.304 40.692 75.9307 40.804C75.5573 40.916 75.1373 41.0093 74.6707 41.084C74.2227 41.1773 73.7373 41.252 73.2147 41.308C72.692 41.364 72.1693 41.392 71.6467 41.392C70.3213 41.392 69.164 41.196 68.1747 40.804C67.204 40.412 66.392 39.88 65.7387 39.208C65.104 38.5173 64.628 37.7053 64.3107 36.772C64.012 35.8387 63.8627 34.8307 63.8627 33.748ZM73.6627 32.152C73.644 31.7973 73.5787 31.452 73.4667 31.116C73.3733 30.78 73.2147 30.4813 72.9907 30.22C72.7853 29.9587 72.5147 29.744 72.1787 29.576C71.8613 29.408 71.46 29.324 70.9747 29.324C70.508 29.324 70.1067 29.408 69.7707 29.576C69.4347 29.7253 69.1547 29.9307 68.9307 30.192C68.7067 30.4533 68.5293 30.7613 68.3987 31.116C68.2867 31.452 68.2027 31.7973 68.1467 32.152H73.6627Z" />
        <path d="M110.978 34.644C110.717 35.708 110.642 36.7813 110.754 37.864C110.866 38.928 111.081 39.88 111.398 40.72L107.674 41.252C107.562 41.028 107.46 40.8133 107.366 40.608C107.273 40.4027 107.18 40.1693 107.086 39.908C106.564 40.3373 105.985 40.692 105.35 40.972C104.716 41.252 104.006 41.392 103.222 41.392C102.289 41.392 101.486 41.2333 100.814 40.916C100.161 40.58 99.6196 40.1413 99.1903 39.6C98.7796 39.04 98.481 38.396 98.2943 37.668C98.1076 36.9213 98.0143 36.128 98.0143 35.288C98.0143 34 98.2383 32.7867 98.6863 31.648C99.153 30.5093 99.7876 29.52 100.59 28.68C101.412 27.8213 102.373 27.1493 103.474 26.664C104.576 26.1787 105.77 25.936 107.058 25.936C107.226 25.936 107.516 25.9453 107.926 25.964C108.356 25.9827 108.841 26.0293 109.382 26.104C109.924 26.16 110.493 26.2627 111.09 26.412C111.688 26.5613 112.257 26.7667 112.798 27.028L110.978 34.644ZM108.066 29.492C107.824 29.4547 107.6 29.4267 107.394 29.408C107.208 29.3893 106.974 29.38 106.694 29.38C106.06 29.38 105.462 29.5387 104.902 29.856C104.361 30.1733 103.885 30.5933 103.474 31.116C103.064 31.62 102.737 32.208 102.494 32.88C102.27 33.552 102.158 34.252 102.158 34.98C102.158 35.876 102.308 36.5853 102.606 37.108C102.905 37.6307 103.456 37.892 104.258 37.892C104.688 37.892 105.07 37.808 105.406 37.64C105.761 37.472 106.134 37.192 106.526 36.8C106.564 36.3333 106.62 35.848 106.694 35.344C106.788 34.8213 106.881 34.3453 106.974 33.916L108.066 29.492ZM117.863 38.032C118.815 38.032 119.469 37.9013 119.823 37.64C120.178 37.36 120.355 37.0613 120.355 36.744C120.355 36.5387 120.318 36.3613 120.243 36.212C120.187 36.0627 120.085 35.9227 119.935 35.792C119.786 35.6613 119.581 35.5307 119.319 35.4C119.058 35.2507 118.722 35.0827 118.311 34.896C117.845 34.6907 117.406 34.476 116.995 34.252C116.585 34.0093 116.221 33.7293 115.903 33.412C115.605 33.076 115.362 32.7027 115.175 32.292C115.007 31.8627 114.923 31.3587 114.923 30.78C114.923 29.268 115.474 28.0733 116.575 27.196C117.695 26.3187 119.319 25.88 121.447 25.88C122.455 25.88 123.351 25.992 124.135 26.216C124.919 26.44 125.554 26.6827 126.039 26.944L124.611 30.052C124.219 29.8467 123.715 29.6507 123.099 29.464C122.483 29.2773 121.877 29.184 121.279 29.184C121.018 29.184 120.757 29.2027 120.495 29.24C120.253 29.2587 120.019 29.3147 119.795 29.408C119.59 29.5013 119.422 29.632 119.291 29.8C119.161 29.968 119.095 30.192 119.095 30.472C119.095 30.8453 119.235 31.1253 119.515 31.312C119.814 31.4987 120.225 31.7227 120.747 31.984C121.475 32.3387 122.082 32.6653 122.567 32.964C123.053 33.2627 123.435 33.58 123.715 33.916C124.014 34.252 124.229 34.6347 124.359 35.064C124.49 35.4933 124.555 35.9973 124.555 36.576C124.555 37.1733 124.425 37.7613 124.163 38.34C123.921 38.9187 123.529 39.432 122.987 39.88C122.446 40.328 121.755 40.692 120.915 40.972C120.075 41.252 119.067 41.392 117.891 41.392C117.163 41.392 116.501 41.3453 115.903 41.252C115.325 41.1587 114.811 41.0467 114.363 40.916C113.915 40.7667 113.533 40.6173 113.215 40.468C112.917 40.3187 112.683 40.1973 112.515 40.104L113.943 36.912C114.261 37.0987 114.755 37.332 115.427 37.612C116.099 37.892 116.911 38.032 117.863 38.032ZM132.462 31.592C133.582 30.696 134.637 29.7813 135.626 28.848C136.616 27.9147 137.465 27.056 138.174 26.272H142.878C141.833 27.4293 140.741 28.568 139.602 29.688C138.482 30.7893 137.194 31.9653 135.738 33.216C136.13 33.7013 136.522 34.2613 136.914 34.896C137.325 35.5307 137.708 36.1933 138.062 36.884C138.436 37.5747 138.772 38.2747 139.07 38.984C139.388 39.6933 139.649 40.3653 139.854 41H135.206C135.038 40.5147 134.824 39.9827 134.562 39.404C134.32 38.8253 134.04 38.256 133.722 37.696C133.424 37.1173 133.106 36.5573 132.77 36.016C132.434 35.4747 132.098 34.9893 131.762 34.56L130.194 41H126.05L131.09 19.944L135.43 19.272L132.462 31.592Z" fill="url(#paint1_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="85.0368" y1="82.5" x2="128.739" y2="32.8693" gradientUnits="userSpaceOnUse">
            <stop stopColor="#20D1E8" />
            <stop offset="1" stopColor="#55A9E7" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="92.5944" y1="61.6304" x2="116.5" y2="29.7583" gradientUnits="userSpaceOnUse">
            <stop stopColor="#20D1E8" />
            <stop offset="1" stopColor="#55A9E7" />
          </linearGradient>
        </defs>
      </svg>
    </Container>
  )
}