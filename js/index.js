
import {Cursor} from '@wonderlandengine/components';
import {FingerCursor} from '@wonderlandengine/components';
import {HandTracking} from '@wonderlandengine/components';
import {HowlerAudioListener} from '@wonderlandengine/components';
import {MouseLookComponent} from '@wonderlandengine/components';
import {PlayerHeight} from '@wonderlandengine/components';
import {TeleportComponent} from '@wonderlandengine/components';
import {VrModeActiveSwitch} from '@wonderlandengine/components';


const Constants = {
    ProjectName: 'MyWonderland',
    RuntimeBaseName: 'WonderlandRuntime',
    WebXRRequiredFeatures: ['local',],
    WebXROptionalFeatures: ['local','local-floor','hand-tracking','hit-test',],
};
const RuntimeOptions = {
    physx: false,
    loader: false,
    xrFramebufferScaleFactor: 1,
    xrOfferSession: {
        mode: 'auto',
        features: Constants.WebXRRequiredFeatures,
        optionalFeatures: Constants.WebXROptionalFeatures,
    },
    canvas: 'canvas',
};


engine.registerComponent(Cursor);
engine.registerComponent(FingerCursor);
engine.registerComponent(HandTracking);
engine.registerComponent(HowlerAudioListener);
engine.registerComponent(MouseLookComponent);
engine.registerComponent(PlayerHeight);
engine.registerComponent(TeleportComponent);
engine.registerComponent(VrModeActiveSwitch);
