import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';

import { useCurrentOrganisation } from '@documenso/lib/client-only/providers/organisation';

import { AvatarImageForm } from '~/components/forms/avatar-image';
import { OrganisationUpdateForm } from '~/components/forms/organisation-update-form';
import { SettingsHeader } from '~/components/general/settings-header';
import { appMetaTags } from '~/utils/meta';

export function meta() {
  return appMetaTags('Settings');
}

export default function OrganisationSettingsGeneral() {
  const { _ } = useLingui();

  const organisation = useCurrentOrganisation();

  return (
    <div className="max-w-2xl">
      <SettingsHeader
        title={_(msg`General`)}
        subtitle={_(msg`Here you can edit your organisation details.`)}
      />

      <div className="space-y-8">
        <AvatarImageForm organisation={organisation} />
        <OrganisationUpdateForm />
      </div>

      {/* Organisation deletion disabled in this deployment */}
    </div>
  );
}
