import classNames from 'classnames/bind';
import React, { FC } from 'react';

import {
  PlayerProfile,
  useGetPlayerProfileQuery,
} from '@content/services/Faceit';

import { i18n } from '@shared/utils/i18n';

import FaceitLevel0Icon from '@shared/icons/faceit-level-0.svg';
import FaceitLevel1Icon from '@shared/icons/faceit-level-1.svg';
import FaceitLevel2Icon from '@shared/icons/faceit-level-2.svg';
import FaceitLevel3Icon from '@shared/icons/faceit-level-3.svg';
import FaceitLevel4Icon from '@shared/icons/faceit-level-4.svg';
import FaceitLevel5Icon from '@shared/icons/faceit-level-5.svg';
import FaceitLevel6Icon from '@shared/icons/faceit-level-6.svg';
import FaceitLevel7Icon from '@shared/icons/faceit-level-7.svg';
import FaceitLevel8Icon from '@shared/icons/faceit-level-8.svg';
import FaceitLevel9Icon from '@shared/icons/faceit-level-9.svg';
import FaceitLevel10Icon from '@shared/icons/faceit-level-10.svg';

import { FaceitLevelProps } from './FaceitLevel.props';

import styles from './FaceitLevel.local.css';

const cx = classNames.bind(styles);

const skillLevelIcons = [
  FaceitLevel1Icon,
  FaceitLevel2Icon,
  FaceitLevel3Icon,
  FaceitLevel4Icon,
  FaceitLevel5Icon,
  FaceitLevel6Icon,
  FaceitLevel7Icon,
  FaceitLevel8Icon,
  FaceitLevel9Icon,
  FaceitLevel10Icon,
];

export const FaceitLevel: FC<FaceitLevelProps> = (props) => {
  const { steamId } = props;

  const { error, data: profile, isLoading } = useGetPlayerProfileQuery(steamId);

  let content = null;

  if (profile) {
    if (Object.keys(profile).length) {
      const { elo, nickname, skillLevel, url } = profile as PlayerProfile;

      const Icon = skillLevelIcons[skillLevel - 1];

      return (
        <a
          className={cx('container')}
          href={url}
          target="_blank"
          title={`${nickname} [${elo}]`}
          rel="noopener noreferrer"
        >
          {Icon && <Icon className={cx('level-icon')} />}

          <span className={cx('nickname')}>{nickname}</span>
          <span>{elo}</span>
        </a>
      );
    } else {
      content = (
        <>
          <FaceitLevel0Icon className={cx('level-icon')} />

          <span className={cx('nickname')}>{i18n('match_page_no_faceit')}</span>
          {/* используется для горизонтального выравнивания */}
          <span style={{ visibility: 'hidden' }}>&nbsp;</span>
        </>
      );
    }
  } else if (isLoading) {
    content = (
      <>
        <svg
          className={cx('level-icon')}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_110_54)">
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="#1F1F22"
            />
            <path
              className={cx('rotate')}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.6849 17.467C17.8019 16.5096 18.5989 15.2331 18.9685 13.8091C19.3381 12.3851 19.2626 10.8821 18.7522 9.50232C18.2418 8.12253 17.321 6.9322 16.1137 6.09154C14.9064 5.25087 13.4706 4.80021 11.9994 4.80021C10.5283 4.80021 9.0924 5.25087 7.88509 6.09154C6.67779 6.9322 5.75698 8.12253 5.24659 9.50232C4.7362 10.8821 4.66073 12.3851 5.03034 13.8091C5.39995 15.2331 6.19689 16.5096 7.31391 17.467L5.75091 19.289C4.69867 18.3885 3.85419 17.2705 3.27568 16.0122C2.69717 14.7538 2.39838 13.385 2.39991 12C2.39991 9.45395 3.41133 7.01215 5.21168 5.2118C7.01203 3.41145 9.45383 2.40002 11.9999 2.40002C13.2606 2.40002 14.5089 2.64834 15.6737 3.13078C16.8384 3.61323 17.8967 4.32036 18.7881 5.2118C19.6796 6.10324 20.3867 7.16154 20.8692 8.32626C21.3516 9.49099 21.5999 10.7393 21.5999 12C21.6015 13.3852 21.3026 14.7543 20.7239 16.0129C20.1452 17.2714 19.3005 18.3895 18.2479 19.29L16.6849 17.467Z"
              fill="#CDCDCD"
              fillOpacity="0.1"
            />
            <path
              d="M13.53 9.36C13.8567 9.60667 14.02 9.96333 14.02 10.43C14.02 10.6567 13.9833 10.8567 13.91 11.03C13.8433 11.1967 13.76 11.3367 13.66 11.45C13.56 11.5567 13.4233 11.6833 13.25 11.83C13.01 12.0367 12.83 12.2267 12.71 12.4C12.5967 12.5667 12.54 12.7933 12.54 13.08V13.24H11.62V13.08C11.62 12.7933 11.66 12.5467 11.74 12.34C11.8267 12.1333 11.93 11.9633 12.05 11.83C12.17 11.6967 12.3233 11.55 12.51 11.39C12.7167 11.2167 12.8667 11.0667 12.96 10.94C13.06 10.8067 13.11 10.6467 13.11 10.46C13.11 10.28 13.0367 10.13 12.89 10.01C12.75 9.88333 12.5233 9.82 12.21 9.82C11.83 9.82 11.4267 9.93667 11 10.17L10.7 9.37C10.9867 9.23667 11.2567 9.14 11.51 9.08C11.7633 9.01333 12.0267 8.98 12.3 8.98C12.7933 8.98 13.2033 9.10667 13.53 9.36ZM11.7 14.62C11.8067 14.7267 11.9367 14.78 12.09 14.78C12.2433 14.78 12.3733 14.7267 12.48 14.62C12.5867 14.5133 12.64 14.3833 12.64 14.23C12.64 14.0767 12.5867 13.9467 12.48 13.84C12.3733 13.7333 12.2433 13.68 12.09 13.68C11.9367 13.68 11.8067 13.7333 11.7 13.84C11.5933 13.9467 11.54 14.0767 11.54 14.23C11.54 14.3833 11.5933 14.5133 11.7 14.62Z"
              fill="#EEEEEE"
            />
          </g>
          <defs>
            <clipPath id="clip0_110_54">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span style={{ visibility: 'hidden' }}>&nbsp;</span>
        <span style={{ visibility: 'hidden' }}>&nbsp;</span>
      </>
    );
  } else if (error) {
    console.error(error);

    content = i18n('ooops_text');
  }

  return <div className={cx('container')}>{content}</div>;
};
