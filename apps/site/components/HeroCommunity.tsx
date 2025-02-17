import React from 'react'
import { EnsureFlexed, H4, Paragraph, XStack, YStack } from 'tamagui'

import { Card } from './Card'
import { ContainerLarge } from './Container'
import { DiscordIcon } from './DiscordIcon'
import { GithubIcon } from './GithubIcon'
import { HomeH2, HomeH3 } from './HomeH2'

export function Community() {
  return (
    <ContainerLarge mt="$-8" mb="$6" space="$6">
      <YStack zi={1} space="$3">
        <HomeH2>Built together</HomeH2>
      </YStack>

      <YStack maxWidth="100%" fs={0} als="center">
        <EnsureFlexed />

        <XStack space="$4" $sm={{ flexDirection: 'column' }}>
          <Card
            width="33.33%"
            jc="center"
            $sm={{ width: 'auto' }}
            space="$2"
            tag="a"
            href="https://twitter.com/tamagui_js"
            target="_blank"
            rel="noopener noreferrer"
            p="$6"
          >
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.9993 6.50637C27.9673 6.9667 26.8601 7.27923 25.6985 7.4186C26.8851 6.70064 27.796 5.56035 28.2222 4.20468C27.1108 4.87196 25.8823 5.35341 24.5745 5.61525C23.5258 4.48764 22.0341 3.78235 20.3795 3.78235C17.2082 3.78235 14.6343 6.38389 14.6343 9.58936C14.6343 10.0455 14.6845 10.4889 14.7848 10.9113C10.009 10.6705 5.77634 8.35616 2.94345 4.84239C2.45041 5.69972 2.16629 6.69641 2.16629 7.76068C2.16629 9.77519 3.18162 11.5532 4.72341 12.5921C3.78329 12.5626 2.89749 12.3007 2.12033 11.8657C2.12033 11.8911 2.12033 11.9122 2.12033 11.9375C2.12033 14.7502 4.10084 17.0984 6.729 17.6305C6.24849 17.7614 5.73874 17.8332 5.21645 17.8332C4.84458 17.8332 4.48525 17.7952 4.13427 17.7276C4.86547 20.0335 6.98805 21.7144 9.49921 21.7609C7.53123 23.3193 5.05768 24.2484 2.36267 24.2484C1.89888 24.2484 1.44344 24.2188 0.992188 24.1681C3.5326 25.8152 6.55351 26.7781 9.80005 26.7781C20.367 26.7781 26.1456 17.9303 26.1456 10.2566C26.1456 10.0032 26.1414 9.75407 26.1289 9.5049C27.2528 8.68558 28.2264 7.66355 28.9952 6.49792L28.9993 6.50637Z"
                  fill="#1d9bf0"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="28" height="23" fill="white" transform="translate(1 3.78235)" />
                </clipPath>
              </defs>
            </svg>
            <H4 cursor="pointer" fontFamily="$silkscreen">
              Twitter
            </H4>
            <Paragraph cursor="pointer" theme="alt2">
              Announcements and general updates.
            </Paragraph>
          </Card>
          <Card
            width="33.33%"
            jc="center"
            space="$2"
            $sm={{ width: 'auto' }}
            tag="a"
            href="https://discord.gg/4qh6tdcVDa"
            target="_blank"
            rel="noopener noreferrer"
            p="$6"
          >
            <DiscordIcon />
            {/* TODO this is using $body for other attributes not $silkscreen */}
            <H4 cursor="pointer" fontFamily="$silkscreen">
              Discord
            </H4>
            <Paragraph cursor="pointer" theme="alt2">
              Get involved and get questions answered.
            </Paragraph>
          </Card>
          <Card
            width="33.33%"
            jc="center"
            $sm={{ width: 'auto' }}
            space="$2"
            tag="a"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noopener noreferrer"
            p="$6"
          >
            <GithubIcon />
            <H4 cursor="pointer" fontFamily="$silkscreen">
              GitHub
            </H4>
            <Paragraph cursor="pointer" theme="alt2">
              Issues, feature requests, and contributing.
            </Paragraph>
          </Card>
        </XStack>
      </YStack>
    </ContainerLarge>
  )
}
